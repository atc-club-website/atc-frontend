var newsletter_links = {
    "Toastmaster of the Day Script": "https://kxwuplxrsjipwfludoao.supabase.co/storage/v1/object/public/scripts/toastmasters-675G-toastmaster-script-and-checklist-letter-size.pdf",
    "Table Topics Master Script": "https://kxwuplxrsjipwfludoao.supabase.co/storage/v1/object/public/scripts/toastmasters-675F-topicsmaster-script-and-log-letter-size.pdf",
    "Timer Script": "https://kxwuplxrsjipwfludoao.supabase.co/storage/v1/object/public/scripts/toastmasters-675E-timer-script-and-log-letter-size.pdf",
    "Grammarian Script": "https://kxwuplxrsjipwfludoao.supabase.co/storage/v1/object/public/scripts/toastmasters-675C-grammarian-script-and-log-letter-size.pdf",
    "Ah-Counter Script": "https://kxwuplxrsjipwfludoao.supabase.co/storage/v1/object/public/scripts/toastmasters-675A-ah-counter-script-and-log-letter-size.pdf",
    "General Evaluator Script": "https://kxwuplxrsjipwfludoao.supabase.co/storage/v1/object/public/scripts/toastmasters-675B-general-evaluator-checklist-letter-size.pdf",
    "Sergeant at Arms Script": "https://kxwuplxrsjipwfludoao.supabase.co/storage/v1/object/public/scripts/SAA-Script.pdf"
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