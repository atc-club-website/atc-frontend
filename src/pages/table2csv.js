const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = `
    <table>
        <tr>
            <th>
                role
            </th>
            <th>
                desc
            </th>
        </tr>
        <tr>
            <td>
                Toastmaster of the Day
            </td>
            <td>
                The Toastmaster of the Day (TMOD) is the meeting's director and host. The TMOD is responsible for ensuring that the meeting runs smoothly and on time. The TMOD also introduces the participants and the speakers.
            </td>
        </tr>
        <tr>
            <td>
                Table Topics Master
            </td>
            <td>
                The Table Topics Master prepares topics for the Table Topics session. The Table Topics Master also conducts the Table Topics session.
            </td>
        </tr>
        <tr>
            <td>
                General Evaluator
            </td>
            <td>
                The General Evaluator evaluates everything that takes place during the meeting. The General Evaluator also evaluates the evaluators.
            </td>
        </tr>
        <tr>
            <td>
                Timer
            </td>
            <td>
                The Timer is responsible for monitoring the time for each segment of the meeting.
            </td>
        </tr>
        <tr>
            <td>
                Grammarian
            </td>
            <td>
                The Grammarian is responsible for monitoring the use of language during the meeting. The Grammarian also introduces the word of the day.
            </td>
        </tr>
        <tr>
            <td>
                Ah-Counter
            </td>
            <td>
                The Ah-Counter is responsible for monitoring the use of filler words such as 'ah', 'um', 'so' etc. during the meeting.
            </td>
        </tr>
        <tr>
            <td>
                Evaluators
            </td>
            <td>
                The Evaluators are responsible for evaluating the prepared speeches and the meeting as a whole.
            </td>
        </tr>
        <tr>
            <td>
                Sergeant at Arms
            </td>
            <td>
                The Sergeant at Arms is responsible for setting up the meeting venue and ensuring that the meeting runs smoothly.
            </td>
        </tr>
    </table>
`; // your HTML string here

const dom = new JSDOM(html);
const $ = require("jquery")(dom.window);

function tableToCSV() {
    const rows = $('tr');
    let csv = [];

    rows.each(function () {
        let row = [];
        $(this).find('th, td').each(function () {
            const text = $(this).text().trim().replace(/"/g, '""'); // escape double quotes
            row.push(`"${text}"`);
        });
        csv.push(row.join(','));
    });

    return csv.join('\n');
}

const csv = tableToCSV();
console.log(csv);