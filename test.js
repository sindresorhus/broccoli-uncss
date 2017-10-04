import fs from 'fs';
import test from 'ava';
import del from 'del';

test.afterEach(() => {
	del.sync('temp');
});

test('run uncss', t => {
	t.is(
		fs.readFileSync('temp/fixture.css', 'utf8'),
		fs.readFileSync('fixture/expected.css', 'utf8')
	);
});
