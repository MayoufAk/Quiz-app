const quizData=[
{ question:"Whats the best programming language?",
a:"Python",
b:"Java",
c:"C++",
d:"Ruby",
correct:"a"
},
{ question:"What is the best state in the US?",
a:"NY",
b:"CA",
c:"MA",
d:"TX",
correct:"b"
},
{ question:"How many hours in the day?",
a:"12",
b:"7",
c:"9",
d:"24",
correct:"d"
},
{ question:"Who is the president of the US?",
a:"Donald Trump",
b:"Micheal James",
c:"Joe Biden",
d:"Harry Potter",
correct:"c"
},
{ question:"How old are you? lol",
a:"56",
b:"45",
c:"25",
d:"36",
correct:"d"
},]


const questEl=document.getElementById("question")
const text_a=document.getElementById("text_a")
const text_b=document.getElementById("text_b")
const text_c=document.getElementById("text_c")
const text_d=document.getElementById("text_d")
const submitBtn=document.getElementById("submit")
const answersEls=document.querySelectorAll(".answer")

currentQuiz=0
score=0
function load(){
const qdata=quizData[currentQuiz]
 questEl.innerText=qdata.question
 
 text_a.innerText=qdata.a
 text_b.innerText=qdata.b
 text_c.innerText=qdata.c
 text_d.innerText=qdata.d

}
 load()

function getSelected(){
    
    let answer= undefined
    answersEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer=answerEl.id
        }
    })
    return answer
}
function deselectAnswer(){
    answersEls.forEach((answerEl)=>{
        answerEl.checked=false 
})
}
 
submitBtn.addEventListener("click",()=>{
    const answer=getSelected()
          if (answer){
                if (answer==quizData[currentQuiz].correct){
                    score++
                    console.log(score)
                }
            currentQuiz++
            if(currentQuiz<quizData.length){
                load()
                deselectAnswer()
            }else{
            quiz.innerHTML=`<h1  style="
            text-align:center ; margin:8.8rem">You Answered ${score}/${quizData.length} correct answers</h1>
            <button onClick="location.reload()"  
            >Reload</button>`
          }
        }
    })

  