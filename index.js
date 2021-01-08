

/* globals twttr ga */

// Disable for an entire file is
// eslint-disable no-extend-native

const cakes = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ cake: 'Mudcake', glaze: 'Glazed' });
  }, 2000);
});

// Enabled an inline-rule for eslint at top of file.
ga.track();
twttr.track();

// We don't need to polyfill Array.prototype.includes() as it's
// now implemented.

// Use eslint-disable at the above a block and eslint-enable
// at the end end of the block

/* eslint-disable */
const randomBlock = () => {
    // This is a random block here.
}
/* eslint-enable */
