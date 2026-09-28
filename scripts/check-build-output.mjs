import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';

const adapter = {
  name: 'build output check',
  async onBuildComplete({ outputs }) {
    let checked = 0;
    function check(value) {
      if (!value || typeof value !== 'object') return;
      for (const [key, item] of Object.entries(value)) {
        if ((key === 'filePath' || key === 'fallbackPathname') && typeof item === 'string') {
          assert.ok(existsSync(item), `Missing build output: ${item}`);
          checked++;
        } else if (typeof item === 'object') {
          check(item);
        }
      }
    }
    check(outputs);
    assert.ok(checked > 0, 'No build outputs checked');
    console.log(`Verified ${checked} build output files.`);
  },
};

export default adapter;
