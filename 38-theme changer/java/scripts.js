const input=document.querySelector('.switcher input');

input.addEventListener('change',()=>
{
    if(input.checked)
    {
        document.body.setAttribute('theme','dark');
        // hjibnzxc console.log("good");
    }
    else
    {
        document.body.setAttribute('theme','white');
        // console.log('not good');
    }
})