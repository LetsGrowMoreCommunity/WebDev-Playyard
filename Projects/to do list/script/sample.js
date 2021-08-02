const form=document.querySelector('#formm');
const tasklist=document.querySelector('.collection');
//const clearBtn=document.querySelector('.clear task');
const filter=document.querySelector('#filter');
const taskInput=document.querySelector('#task');

loadEventListener();

function loadEventListener(){
    form.addEventListener('submit',add);
    tasklist.addEventListener('click',remove);
    filter.addEventListener('keyup',filterTask);

}

function add(e)
{
const li=document.createElement('li');
li.className='collection-item';
li.appendChild(document.createTextNode(taskInput.value));

const link=document.createElement('a');
//link.className="delete-item";
link.innerHTML='<b class="material-icons" size=200>done</b>'
li.appendChild(link);
tasklist.appendChild(li);
e.preventDefault();
}

function remove(e)
{
e.target.parentElement.parentElement.remove();
}

function cleartask()
{
tasklist.innerHTML=" ";
}
//no need although

function filterTask(e)
{
const text=e.target.value.toLowerCase();
document.querySelectorAll('.collection-item').forEach(function(task){
    const item=task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text)!=-1){
        task.style.display='block';
    }
    else
    {
        task.style.display='none';
    }
}
);
}
