var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName('close')[0];

function getModal(modal)
{
    modal.style.display = 'block';
}

function getEventType()
{
    let selected = document.getElementById('event-type').value;
}

function getEventInfo()
{
    let eventtitle = document.getElementById('event-title').value;
    let datefrom = document.getElementById('date-from').value;
    let dateto = document.getElementById('date-to').value;
    let postdate = document.getElementById('post-date').value;
    var eventcheck;
    var datecheck;
    var postdatecheck;

    if(eventtitle == "")
    {
        document.getElementById('warning-event-title').innerHTML = "<p id='warning-event-type'>Please choose event title.</p>";
    }
    else
    {
        eventcheck = true;
    }
    
    if(datefrom == "mm/dd/yyyy" || dateto == "mm/dd/yyyy")
    {
        document.getElementById('warning-event-date').innerHTML = "<p id='warning-event-type'>Please choose dates..</p>";
    }
    else
    {
        datecheck = true;
    }

    if(postdate == "mm/dd/yyyy")
    {
        document.getElementById('warning-event-type').innerHTML = "<p id='warning-event-type'>Please choose posting date.</p>";
    }
    else
    {
        postdatecheck = true;
    }

    if(postdatecheck == true && datecheck == true && eventcheck == true)
    {
        //allow submission
    }
}

function validate()
{
    getEventInfo();
}