import fs from 'fs/promises';
import path from 'path';
import util from 'util';
import { exec as callBackExec } from 'child_process';

const exec = util.promisify(callBackExec);

const main = async () => {
	const { stdout: lastCommitHash } = await exec('git rev-parse HEAD');

	const packageJson = await fs
		.readFile(path.resolve('.publish/package.json'))
		.then((data) => data.toString())
		.then(JSON.parse);

	const packageJsonWithBetaVersion = {
		...packageJson,
		version: `${packageJson.version}-${lastCommitHash.substring(0, 6)}`,
	};

	await fs.writeFile(
		path.resolve('.publish/package.json'),
		JSON.stringify(packageJsonWithBetaVersion),
	);
};

main();
