// Create the HTML for the message

let msg = '<div class=\"header\"><a id=\"close\" href="#">ببند X</a></div>';
msg += '<div><h2>آگهی مهم تأمین سامانه</h2>';
msg += 'سامانه‌های کارساز (سرور) بین ساعات سه و چهار بامداد بروزرسانی خواهند شد';
msg += 'در این زمان ممکن است کمی اختلال در خدمات را شاهد باشیم.</div>';

let elNote = document.createElement('div');         // Create a new element
elNote.setAttribute('id', 'note');                  //Add an id of note
elNote.innerHTML = msg;                             //Add the message
document.body.appendChild(elNote);                  // Add it to the page

function dismissNote() {                            // Declare function    
    document.body.removeChild(elNote);              // Remove the note
}

let elClose = document.getElementById('close');                     // Get the close button
elClose.addEventListener('click', dismissNote, false);         // Click close-clear note