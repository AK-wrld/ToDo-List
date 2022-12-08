let h1= $('<h1>')
h1.text('TODO List')
h1.attr('id','h1');
$('body').append(h1)
let inp= $('<input>')
inp.attr({'placeholder':'Enter Task',"id":"movie"});
$('body').append(inp)
let btn= $('<button>')
btn.attr({'id':'btn', 'type':'submit'})
btn.text('Add Task')
$('body').append(btn)
btn.css('marginLeft','10px')
let ul = $('<ul>').appendTo('body').css('marginTop','10px')
// sab set kr dia pahle
var i = 1;
btn.click(()=> {
    const name = inp.val();
    let li= $("<li>") //create element ka syntax
   li.text(name); //inner text ka syntax
   li.attr('id',i).css('margin','10px')
   ul.append(li);
   let highpriority = $('<button>')
   highpriority.text("⬆️").css('margin',' 0px 10px').attr('id','highpriority')
   
   let lowpriority = $('<button>')
   lowpriority.text("⬇️").css('margin','0px 10px').attr('id','lowpriority')
   let cross = $('<button>')
   cross.text('❌').css('margin','0px 10px').attr('id','cross')
   
   li.append(highpriority)
   li.append(lowpriority)
   li.append(cross)
   let last = checkLast()
   changebtns(last);
   highpriority.click((ev)=> {
    console.log(ev.target)
    let previd =  $(ev.target).parent().attr('id')
    $(ev.target).parent().removeAttr('id')
    $(ev.target).parent().attr('id',previd-1)
    $(ev.target).parent().prev().removeAttr('id')
    $(ev.target).parent().prev().attr('id',previd)
    $(ev.target)
    .parent()
    .insertBefore(
        $(ev.target).parent().prev()
    )

    let last = checkLast()
    changebtns(last);
    
})
lowpriority.click((ev)=> {
    let previd =  $(ev.target).parent().next().attr('id')
    $(ev.target).parent().removeAttr('id')
    $(ev.target).parent().attr('id',previd)
    $(ev.target).parent().next().removeAttr('id')
    $(ev.target).parent().next().attr('id',previd-1)
    $(ev.target)
    .parent()
    .insertAfter(
        $(ev.target).parent().next()
    )
    let last = checkLast()
    changebtns(last);
})
cross.click((ev)=> {
    let temp = Number( $(ev.target).parent().attr('id'))
    let last = checkLast()
    // console.log(temp)
    $(ev.target)
    .parent()
    .remove()
    if(temp!=last) {

        for(let i =temp+1;i<=last;i++) {
            // console.log(i)
            let parentli = $(`#${i}`);
            // console.log(parentli.text())
            parentli.removeAttr('id')
            parentli.attr('id',temp)
            temp=i
        }
    }
    else {
        let lastli = $(`#${last}`)
        lastli.removeAttr('id')
        lastli.attr('id',last)
    }
    changebtns(last-1);
    i--;
})
   
   i++;
})
function checkLast() {
    let lastchild = $("ul li:last-child").attr('id');
    // console.log(lastchild)
    return Number(lastchild)
}
function changebtns(last) {
    for(let i=1;i<=last;i++) {
        let pos = $(`#${i}`)
        // console.log(i)
        if(i==1) {
            pos.children('#highpriority').css('display','none')
            // console.log(pos.children('#highpriority'))
        }
        else if(i==last) {
            pos.children('#lowpriority').css('display','none')
        }
        else {
            pos.children('#highpriority').css('display','inline')
            pos.children('#lowpriority').css('display','inline')
            pos.children('#cross').css('display','inline')

        }
    }
}
