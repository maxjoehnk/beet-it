const { exec } = require('child_process');
const { chain, split, isEmpty } = require('lodash');

const queryformat = "$title;$artist;$album;$albumartist;$genre;$year;$bpm;$initial_key;$length;$path";

function list(query) {
    return new Promise((resolve, reject) => {
        exec(`beet list -f ${queryformat} ${query || ''}`, (err, stdout) => {
            if (err) {
                console.error(err);
                return reject(err);
            }
            let results = chain(stdout)
                .split(process.platform === 'win32' ? '\r\n' : '\n')
                .reject(isEmpty)
                .map(parseRow)
                .value();
            return resolve(results);
        });
    });
}

function parseRow(row) {
    let fields = split(row, ';');

    return {
        data: {
            title:       fields[0],
            artist:      fields[1],
            album:       fields[2],
            albumartist: fields[3],
            genre:       fields[4],
            year:        fields[5],
            bpm:         fields[6],
            key:         fields[7],
            length:      fields[8]
        },
        file: fields[9]
    };
}

module.exports = {
    list
};