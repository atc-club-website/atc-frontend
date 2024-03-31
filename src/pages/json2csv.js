var newsletter_links = {
    "The Rise - Aspirations": "https://www.flipsnack.com/AuroraToastmaster/the-rise-3a-2019-20.html",
    "The Rise - Step Up": "https://issuu.com/pradnya.um/docs/the_rise_2-2019-20",
    "The Rise - Celebrations": "https://issuu.com/pradnya.um/docs/the_rise_1-2019-20",
    "The Rise - Miles & Smiles": "https://online.fliphtml5.com/wvmpo/kwpl/",
    "The Rise - Enlightening Minds": "https://online.fliphtml5.com/tltps/lpao/?fbclid=IwAR1WyKFECqSVx5qs6h4Vqc9kYU-talq4HrO3zzpsb74nG_sQm8-cC7zgrrQ#p=1",
    "The Rise - Spreading Wings": "https://online.fliphtml5.com/ugmlz/tzpa/",
    "The Rise - Aim Ahead": "https://online.fliphtml5.com/ugmlz/qehd/?1601454799003https://online.fliphtml5.com/ugmlz/qehd/?1601454799003https://online.fliphtml5.com/ugmlz/qehd/?1601454799003",
    "The Rise - Soar High": "https://online.fliphtml5.com/covbr/bdky/",
    "The Rise - Get Set Go": "https://issuu.com/sahityareddy/docs/the_rise_upload?fbclid=IwAR0yDdiQINLpthfYbbL8QvkvCs6S9IQNpcq4-RDr9gcKTgzw9ihqnX9sN2g",
    "The Rise - Game is On": "https://issuu.com/sahityareddy/docs/newsletter-game_is_on",
    "The Rise - Dream Run": "https://issuu.com/sahityareddy/docs/dream_run-_final?fbclid=IwAR03ME1qWRx6d6DBXNhiX5bpOpMVq1oQ_TWONNZJ33jAMmI4ZZETSxO1PrE"
}

function convertToCSV(obj) {
    var csv = 'title,url\n'; // column headings

    for (var key in obj) {
        csv += `${key},${obj[key]}\n`; // each line of data
    }

    return csv;
}

var csvData = convertToCSV(newsletter_links);
console.log(csvData);