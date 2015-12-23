#!/usr/bin/env node
import 'babel-polyfill';
import program from 'commander';
import rtlMd from 'rtl-md';
import { readFile, writeFile } from 'fs-promise';
import { version } from '../package.json';

program
  .version(version);

program
  .command('rtl-md-cli <input>', 'convert the input and put it in output file')
  .option('-o, --output [output]', 'output file path')
  .action(async (input) => {
    try {
      const { output = `${input.replace(/\.[^/.]+$/, '')}.html` } = program;
      const data = await readFile(input, 'utf8');
      const html = rtlMd(data);
      writeFile(output, html);
      console.log(`The file ${input} converted to ${output} successfully!`);
    } catch (e) {
      console.error(`An error happened. :(
Make sure you did all the things right!`);
    }
  });

program.parse(process.argv);
