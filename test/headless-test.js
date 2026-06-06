const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const indexPath = path.resolve(__dirname, '..', 'index.html');
(async () => {
  try {
    const dom = await JSDOM.fromFile(indexPath, {
      resources: 'usable',
      runScripts: 'dangerously',
      url: 'file://' + indexPath
    });

    // wait for scripts to load
    await new Promise(resolve => {
      dom.window.addEventListener('load', () => setTimeout(resolve, 200));
    });

    const w = dom.window;

    console.log('Initial registeredCourses keys:', Object.keys(w.registeredCourses || {}));

    // Ensure extra-list exists
    const extraList = w.document.getElementById('extra-list');
    if (!extraList) {
      console.error('extra-list element not found');
      process.exit(2);
    }

    // Call registerExtraCourse for ex2 (which has slotKey 'spring-1-4' per modifications)
    if (typeof w.registerExtraCourse !== 'function') {
      console.error('registerExtraCourse not found');
      process.exit(2);
    }

    w.registerExtraCourse('ex2');

    // small delay to allow DOM updates
    await new Promise(r => setTimeout(r, 100));

    console.log('After registerExtraCourse("ex2")');
    console.log('registeredExtraIds contains ex2:', (w.registeredExtraIds && w.registeredExtraIds.has('ex2')) || false);
    console.log('registeredCourses keys:', Object.keys(w.registeredCourses || {}));

    // Check for slot presence in DOM
    const daysGrid = w.document.getElementById('days-grid');
    const slotExists = !!w.document.querySelector('.slot[data-day="1"][data-period="4"]') || !!w.document.querySelector('.slot[data-day="1"][data-period="4"]');
    console.log('slot element for day=1 period=4 exists:', slotExists);

    // Print a sample of extra-list HTML for manual inspection
    console.log('extra-list innerHTML snippet:', extraList.innerHTML.slice(0, 240));

    process.exit(0);
  } catch (err) {
    console.error('ERROR', err);
    process.exit(3);
  }
})();
