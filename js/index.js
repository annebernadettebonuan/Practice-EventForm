var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName('close')[0];

function getModal(modal)
{
    modal.style.display = 'block';
}

function getEventInfo()
{
    let eventtitle = document.getElementById('event-title').value;
    let datefrom = document.getElementById('date-from').value;
    let dateto = document.getElementById('date-to').value;
    let postdate = document.getElementById('post-date').value;
    let selected = document.getElementById('event-type').value;

    var eventcheck;
    var datecheck;
    var postdatecheck;
    var eventtype;
    
    if(selected == 'Choose one')
    {
        document.getElementById('warning-event-type').innerHTML = "<p id='warning-event-type'>Please choose event type.</p>";
    }
    else
    {
        document.getElementById('warning-event-type').innerHTML = "";
        eventtype = true;
    }

    if(eventtitle == "")
    {
        document.getElementById('warning-event-title').innerHTML = "<p id='warning-event-title'>Please choose event title.</p>";
    }
    else
    {
        document.getElementById('warning-event-title').innerHTML = "";
        eventcheck = true;
    }
    
    if(datefrom == "" || dateto == "")
    {
        document.getElementById('warning-event-date').innerHTML = "<p id='warning-event-date'>Please choose dates.</p>";
    }
    else
    {
        if(datefrom > dateto)
        {
            document.getElementById('warning-event-date').innerHTML = "<p id='warning-event-date'>Please input valid dates.</p>";
        }
        else
        {
            document.getElementById('warning-event-date').innerHTML = "";
            datecheck = true;
        }
    }

    if(postdate == "")
    {
        document.getElementById('warning-event-postdate').innerHTML = "<p id='warning-event-postdate'>Please choose posting date.</p>";
    }
    else
    {
        if(postdate > datefrom)
        {
            document.getElementById('warning-event-postdate').innerHTML = "<p id='warning-event-postdate'>Posting date must be before event date.</p>";
        }
        else
        {
            document.getElementById('warning-event-postdate').innerHTML = "";
            postdatecheck = true;
        }
    }

    if(postdatecheck == true && datecheck == true && eventcheck == true && eventtype == true)
    {
        document.getElementById('submit-button').type = 'submit';
        document.getElementById('submit-button').value = 'Submit';
        reset();
    }
}

function regRequired()
{
    var x = document.getElementById('reg-required').checked;
    if(x)
    {
        return "Registration required.";
    }
    else
    {
        return "No registration required.";
    }
}

function famProg()
{
    var x = document.getElementById('fam-prog').checked;
    if(x)
    {
        return "Event associated with any family program(s).";
    }
    else
    {
        return "Not associated with any family program(s).";
    }
}

function autoEmail()
{
    var x = document.getElementById('auto-email').checked;
    if(x)
    {
        return "Users will receive an auto-generated email.";
    }
    else
    {
        return "No, users will not receive an auto-generated email.";
    }
}

function pointOfContact()
{
    var x = document.getElementById('point-of-contact').checked;
    if(x)
    {
        return "There is a point of contact.";
    }
    else
    {
        return "No, there is not a point of contact.";
    }
}

function hostCommandPoint()
{
    var x = document.getElementById('hosting-command-point').checked;
    if(x)
    {
        return "There is a hosting command point of contact.";
    }
    else
    {
        return "No, there is not a hosting command point of contact.";
    }
}

function getCheckList()
{
    var a = regRequired();
    var b = famProg();
    var c = autoEmail();
    var d = pointOfContact();
    var e = hostCommandPoint();

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
}

function validate()
{
    getEventInfo();
    getCheckList();
}

function reset()
{
    document.getElementById('event-title').value = "";
    document.getElementById('date-from').value = "";
    document.getElementById('date-to').value = "";
    document.getElementById('post-date').value = "";
    document.getElementById('event-type').value = "Choose one";
    document.getElementById('reg-required').checked = false;
    document.getElementById('fam-prog').checked = false;
    document.getElementById('auto-email').checked = false;
    document.getElementById('point-of-contact').checked = false;
    document.getElementById('hosting-command-point').checked = false;

    document.getElementById('warning-event-postdate').innerHTML = "";
    document.getElementById('warning-event-type').innerHTML = "";
    document.getElementById('warning-event-title').innerHTML = "";
    document.getElementById('warning-event-date').innerHTML = "";
}
