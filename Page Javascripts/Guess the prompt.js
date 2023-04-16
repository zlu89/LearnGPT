{\rtf1\ansi\ansicpg1252\cocoartf2708
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Bold;\f1\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red21\green45\blue142;\red255\green255\blue255;\red18\green34\blue46;
\red67\green67\blue67;\red2\green53\blue226;\red116\green0\blue151;\red21\green117\blue58;\red124\green148\blue183;
\red173\green71\blue4;\red36\green0\blue255;}
{\*\expandedcolortbl;;\cssrgb\c10588\c25490\c62745;\cssrgb\c100000\c100000\c100000;\cssrgb\c8627\c17647\c23922;
\cssrgb\c33333\c33333\c33333;\cssrgb\c0\c31765\c90980;\cssrgb\c53725\c3137\c65882;\cssrgb\c5882\c52157\c29020;\cssrgb\c55686\c65098\c76863;
\cssrgb\c74118\c35686\c0;\cssrgb\c20000\c0\c100000;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\b\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4  \cf6 \strokec6 getAllTasks\cf5 \strokec5 ,\cf4 \strokec4  \cf6 \strokec6 insertTask\cf5 \strokec5 ,\cf4 \strokec4  \cf6 \strokec6 updateTask\cf5 \strokec5 ,\cf4 \strokec4  \cf6 \strokec6 removeTask\cf5 \strokec5 ,\cf4 \strokec4  \cf6 \strokec6 getAll\cf4 \strokec4  \cf5 \strokec5 \}\cf4 \strokec4  
\f0\b \cf2 \strokec2 from
\f1\b0 \cf4 \strokec4  \cf7 \strokec7 'backend/graph'\cf5 \strokec5 ;\cf4 \cb1 \strokec4 \

\f0\b \cf2 \cb3 \strokec2 import
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4  \cf6 \strokec6 local\cf4 \strokec4  \cf5 \strokec5 \}\cf4 \strokec4  
\f0\b \cf2 \strokec2 from
\f1\b0 \cf4 \strokec4  \cf7 \strokec7 'wix-storage'\cf5 \strokec5 ;\cf4 \cb1 \strokec4 \

\f0\b \cf2 \cb3 \strokec2 import
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4  \cf6 \strokec6 authentication\cf5 \strokec5 ,\cf4 \strokec4  \cf6 \strokec6 currentMember\cf4 \strokec4  \cf5 \strokec5 \}\cf4 \strokec4  
\f0\b \cf2 \strokec2 from
\f1\b0 \cf4 \strokec4  \cf7 \strokec7 'wix-members'\cf5 \strokec5 ;\cf4 \cb1 \strokec4 \

\f0\b \cf2 \cb3 \strokec2 import
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4  \cf6 \strokec6 generateText\cf4 \strokec4  \cf5 \strokec5 \}\cf4 \strokec4  
\f0\b \cf2 \strokec2 from
\f1\b0 \cf4 \strokec4  \cf7 \strokec7 'backend/gtpApi'\cf4 \cb1 \strokec4 \

\f0\b \cf2 \cb3 \strokec2 import
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 \{\cf6 \strokec6 getprompt\cf5 \strokec5 \}\cf4 \strokec4  
\f0\b \cf2 \strokec2 from
\f1\b0 \cf4 \strokec4    \cf7 \strokec7 'backend/promptget'\cf5 \strokec5 ;\cf4 \cb1 \strokec4 \
\
\

\f0\b \cf2 \cb3 \strokec2 var
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 globalid\cf5 \strokec5 =\cf7 \strokec7 ""\cf4 \cb1 \strokec4 \

\f0\b \cf2 \cb3 \strokec2 var
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 fullName\cf4 \strokec4  \cf5 \strokec5 =\cf7 \strokec7 ""\cf4 \cb1 \strokec4 \

\f0\b \cf2 \cb3 \strokec2 var
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 currentscore\cf5 \strokec5 =\cf7 \strokec7 ""\cf4 \cb1 \strokec4 \

\f0\b \cf2 \cb3 \strokec2 var
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 displayedresponse\cf5 \strokec5 =\cf7 \strokec7 ""\cf4 \cb1 \strokec4 \

\f0\b \cf2 \cb3 \strokec2 var
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 currentinput\cf5 \strokec5 =\cf7 \strokec7 ""\cf4 \cb1 \strokec4 \

\f0\b \cf2 \cb3 \strokec2 var
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 numericacloseness\cf5 \strokec5 =\cf7 \strokec7 ""\cf4 \cb1 \strokec4 \

\f0\b \cf2 \cb3 \strokec2 var
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 guessedcheck\cf5 \strokec5 =
\f0\b \cf2 \strokec2 true
\f1\b0 \cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 $w\cf5 \strokec5 .\cf8 \strokec8 onReady\cf5 \strokec5 (
\f0\b \cf2 \strokec2 async
\f1\b0 \cf4 \strokec4  
\f0\b \cf2 \strokec2 function
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 ()\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     \cf8 \strokec8 registerHandlers\cf5 \strokec5 ();\cf4 \cb1 \strokec4 \
\cb3     \cf8 \strokec8 fetchData\cf5 \strokec5 ();\cf4 \cb1 \strokec4 \
\cb3     \cf8 \strokec8 getLogin\cf5 \strokec5 ();\cf4 \cb1 \strokec4 \
\cb3     \cf8 \strokec8 getgptPrompt\cf5 \strokec5 ();\cf4 \cb1 \strokec4 \
\cb3    \cf9 \strokec9 // updateData(userid) ;\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 \});\cf4 \cb1 \strokec4 \
\
\
\pard\pardeftab720\partightenfactor0

\f0\b \cf2 \cb3 \strokec2 function
\f1\b0 \cf4 \strokec4  \cf8 \strokec8 registerHandlers\cf4 \strokec4 (\cf5 \strokec5 )\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     \cf6 \strokec6 console\cf5 \strokec5 .\cf8 \strokec8 log\cf5 \strokec5 (\cf7 \strokec7 'checkpoint2'\cf5 \strokec5 )\cf4 \cb1 \strokec4 \
\cb3    \cf8 \strokec8 $w\cf5 \strokec5 (\cf7 \strokec7 '#button3'\cf5 \strokec5 ).\cf8 \strokec8 onClick\cf5 \strokec5 (()\cf4 \strokec4  \cf5 \strokec5 =>\cf4 \strokec4  \cf8 \strokec8 getgptPrompt\cf5 \strokec5 ());\cf4 \cb1 \strokec4 \
\cb3     \cf8 \strokec8 $w\cf5 \strokec5 (\cf7 \strokec7 '#button4'\cf5 \strokec5 ).\cf8 \strokec8 onClick\cf5 \strokec5 (()\cf4 \strokec4  \cf5 \strokec5 =>\cf4 \strokec4  \cf8 \strokec8 updateData\cf5 \strokec5 ());\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 \}\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0

\f0\b \cf2 \cb3 \strokec2 async
\f1\b0 \cf4 \strokec4  
\f0\b \cf2 \strokec2 function
\f1\b0 \cf4 \strokec4  \cf8 \strokec8 updateData\cf4 \strokec4 (\cf5 \strokec5 )\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     
\f0\b \cf2 \strokec2 try
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0

\f0\b \cf2 \cb3 \strokec2 if
\f1\b0 \cf5 \strokec5 (!\cf6 \strokec6 guessedcheck\cf5 \strokec5 )\{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3      
\f0\b \cf2 \strokec2 let
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 response\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  
\f0\b \cf2 \strokec2 await
\f1\b0 \cf4 \strokec4  \cf8 \strokec8 generateText\cf5 \strokec5 (\cf7 \strokec7 "on a scale from 1-10 how close are these two sentences: '"\cf4 \strokec4  \cf5 \strokec5 +\cf4 \strokec4  \cf8 \strokec8 $w\cf5 \strokec5 (\cf7 \strokec7 '#input1'\cf5 \strokec5 ).\cf6 \strokec6 value\cf4 \strokec4  \cf5 \strokec5 +\cf7 \strokec7 "' and '"\cf5 \strokec5 +\cf6 \strokec6 currentinput\cf5 \strokec5 +\cf4 \strokec4  \cf7 \strokec7 "'in less than 3 words and as a decimal numerical result"\cf5 \strokec5 );\cf4 \cb1 \strokec4 \
\cb3           \cf9 \strokec9 //  $w('#text28').text = response;\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 numericacloseness\cf5 \strokec5 =\cf6 \strokec6 response\cf5 \strokec5 ;\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 console\cf5 \strokec5 .\cf8 \strokec8 log\cf5 \strokec5 (\cf6 \strokec6 response\cf5 \strokec5 )\cf4 \cb1 \strokec4 \
\cb3       
\f0\b \cf2 \strokec2 let
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 currentnum\cf5 \strokec5 =\cf6 \strokec6 response\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf9 \cb3 \strokec9 //      let numericallist=["0","1","2","3","4","5","6","7","8","9"]\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3  \cf9 \strokec9 //     for (var i=0;i<response.length;i++) \{\cf4 \cb1 \strokec4 \
\cb3  \cf9 \strokec9 //       if(numericallist.includes(response[i]))\{\cf4 \cb1 \strokec4 \
\cb3   \cf9 \strokec9 //        if (response[i+1]=="0" )\{\cf4 \cb1 \strokec4 \
\cb3   \cf9 \strokec9 //          currentnum="10"\cf4 \cb1 \strokec4 \
\cb3    \cf9 \strokec9 //       \}\cf4 \cb1 \strokec4 \
\cb3    \cf9 \strokec9 //       currentnum=response[i]\cf4 \cb1 \strokec4 \
\cb3    \cf9 \strokec9 //     \}\cf4 \cb1 \strokec4 \
\cb3    \cf9 \strokec9 //   \}\cf4 \cb1 \strokec4 \
\cb3    \cf6 \strokec6 guessedcheck\cf5 \strokec5 =
\f0\b \cf2 \strokec2 true
\f1\b0 \cf4 \cb1 \strokec4 \
\cb3        \cf8 \strokec8 $w\cf5 \strokec5 (\cf7 \strokec7 '#text31'\cf5 \strokec5 ).\cf6 \strokec6 text\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf6 \strokec6 currentinput\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf9 \cb3 \strokec9 //$w('#input1').value = "";\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \cb3       \cb1 \
\cb3       
\f0\b \cf2 \strokec2 if
\f1\b0 \cf5 \strokec5 (\cf8 \strokec8 Number\cf5 \strokec5 (\cf6 \strokec6 currentnum\cf5 \strokec5 )>\cf10 \strokec10 5\cf5 \strokec5 )\{\cf4 \cb1 \strokec4 \
\cb3        
\f0\b \cf2 \strokec2 await
\f1\b0 \cf4 \strokec4  \cf8 \strokec8 updateTask\cf5 \strokec5 (\cf6 \strokec6 globalid\cf5 \strokec5 ,\cf8 \strokec8 Number\cf5 \strokec5 (\cf6 \strokec6 currentscore\cf5 \strokec5 )+\cf10 \strokec10 1\cf5 \strokec5 );\cf4 \cb1 \strokec4 \
\cb3             \cf8 \strokec8 $w\cf5 \strokec5 (\cf7 \strokec7 '#text26'\cf5 \strokec5 ).\cf6 \strokec6 text\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "Your score: "\cf4 \strokec4  \cf5 \strokec5 +\cf4 \strokec4  \cf5 \strokec5 (\cf8 \strokec8 Number\cf5 \strokec5 (\cf6 \strokec6 currentscore\cf5 \strokec5 )+\cf10 \strokec10 1\cf5 \strokec5 ).\cf8 \strokec8 toLocaleString\cf5 \strokec5 (\cf7 \strokec7 'en'\cf5 \strokec5 );\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 currentscore\cf5 \strokec5 =(\cf8 \strokec8 Number\cf5 \strokec5 (\cf6 \strokec6 currentscore\cf5 \strokec5 )+\cf10 \strokec10 1\cf5 \strokec5 ).\cf8 \strokec8 toLocaleString\cf5 \strokec5 (\cf7 \strokec7 'en'\cf5 \strokec5 )\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6 console\cf5 \strokec5 .\cf8 \strokec8 log\cf5 \strokec5 (\cf7 \strokec7 "Nice, accourding to chatgpt, your guess has a sameness score of "\cf5 \strokec5 +\cf6 \strokec6 currentnum\cf5 \strokec5 .\cf8 \strokec8 toLocaleString\cf5 \strokec5 (\cf7 \strokec7 'en'\cf5 \strokec5 )+\cf7 \strokec7 "/10. You get a point!"\cf5 \strokec5 )\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf8 \strokec8 $w\cf5 \strokec5 (\cf7 \strokec7 '#text32'\cf5 \strokec5 ).\cf6 \strokec6 text\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "Nice, accourding to chatgpt, your guess has a sameness score of "\cf5 \strokec5 +\cf6 \strokec6 currentnum\cf5 \strokec5 .\cf8 \strokec8 toLocaleString\cf5 \strokec5 (\cf7 \strokec7 'en'\cf5 \strokec5 )+\cf7 \strokec7 "/10. You get a point!"\cf5 \strokec5 ;\cf4 \cb1 \strokec4 \
\
\cb3       \cf5 \strokec5 \}
\f0\b \cf2 \strokec2 else
\f1\b0 \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3           \cf8 \strokec8 $w\cf5 \strokec5 (\cf7 \strokec7 '#text32'\cf5 \strokec5 ).\cf6 \strokec6 text\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "Sorry, accourding to chatgpt, your guess has a sameness score of "\cf5 \strokec5 +\cf6 \strokec6 currentnum\cf5 \strokec5 .\cf8 \strokec8 toLocaleString\cf5 \strokec5 (\cf7 \strokec7 'en'\cf5 \strokec5 )+\cf7 \strokec7 "/10. The score is too low to award a point. Please move on to a new reponse to guess!"\cf5 \strokec5 ;\cf4 \cb1 \strokec4 \
\
\cb3       \cf5 \strokec5 \}\cf4 \cb1 \strokec4 \
\cb3       \cf5 \strokec5 \}
\f0\b \cf2 \strokec2 else
\f1\b0 \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3                \cf8 \strokec8 $w\cf5 \strokec5 (\cf7 \strokec7 '#text32'\cf5 \strokec5 ).\cf6 \strokec6 text\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "Feedback: You have already guessed for this response! Please move onto the next one"\cf4 \cb1 \strokec4 \
\cb3       \cb1 \
\cb3         \cf5 \strokec5 \}\cf4 \strokec4  \cb1 \
\cb3         
\f0\b \cf2 \strokec2 let
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 topic2\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  
\f0\b \cf2 \strokec2 await
\f1\b0 \cf4 \strokec4  \cf8 \strokec8 getAll\cf5 \strokec5 ()\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 console\cf5 \strokec5 .\cf8 \strokec8 log\cf5 \strokec5 (\cf6 \strokec6 topic2\cf5 \strokec5 )\cf4 \cb1 \strokec4 \
\cb3                   
\f0\b \cf2 \strokec2 var
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 myTableData\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf5 \strokec5 []\cf4 \cb1 \strokec4 \
\cb3     
\f0\b \cf2 \strokec2 for
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 (
\f0\b \cf2 \strokec2 var
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 i\cf5 \strokec5 =\cf10 \strokec10 0\cf5 \strokec5 ;\cf6 \strokec6 i\cf5 \strokec5 <\cf10 \strokec10 10\cf5 \strokec5 ;\cf4 \strokec4  \cf6 \strokec6 i\cf5 \strokec5 ++)\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 myTableData\cf5 \strokec5 .\cf8 \strokec8 push\cf5 \strokec5 (\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 \{\cf7 \strokec7 "rank"\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 (\cf6 \strokec6 i\cf5 \strokec5 +\cf10 \strokec10 1\cf5 \strokec5 ).\cf8 \strokec8 toLocaleString\cf5 \strokec5 (\cf7 \strokec7 'en'\cf5 \strokec5 ),\cf4 \strokec4  \cf7 \strokec7 "user"\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 topic2\cf5 \strokec5 [\cf6 \strokec6 i\cf5 \strokec5 ].\cf6 \strokec6 Name\cf5 \strokec5 ,\cf4 \strokec4  \cf7 \strokec7 "score"\cf5 \strokec5 :\cf6 \strokec6 topic2\cf5 \strokec5 [\cf6 \strokec6 i\cf5 \strokec5 ].\cf6 \strokec6 score\cf5 \strokec5 .\cf8 \strokec8 toLocaleString\cf5 \strokec5 (\cf7 \strokec7 'en'\cf5 \strokec5 )\}\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 );\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     \cf5 \strokec5 \}\cf4 \cb1 \strokec4 \
\cb3    \cf6 \strokec6 console\cf5 \strokec5 .\cf8 \strokec8 log\cf5 \strokec5 (\cf6 \strokec6 myTableData\cf5 \strokec5 )\cf4 \cb1 \strokec4 \
\cb3        \cf8 \strokec8 $w\cf5 \strokec5 (\cf7 \strokec7 '#table1'\cf5 \strokec5 ).\cf6 \strokec6 rows\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf6 \strokec6 myTableData\cf5 \strokec5 ;\cf4 \cb1 \strokec4 \
\cb3          \cf5 \strokec5 \}\cf4 \cb1 \strokec4 \
\cb3      
\f0\b \cf2 \strokec2 catch
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 (\cf6 \strokec6 error\cf5 \strokec5 )\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 console\cf5 \strokec5 .\cf8 \strokec8 error\cf5 \strokec5 (\cf6 \strokec6 error\cf5 \strokec5 );\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 \}\}\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0

\f0\b \cf2 \cb3 \strokec2 async
\f1\b0 \cf4 \strokec4  
\f0\b \cf2 \strokec2 function
\f1\b0 \cf4 \strokec4  \cf8 \strokec8 getgptPrompt\cf4 \strokec4 (\cf5 \strokec5 )\{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     \cf6 \strokec6 console\cf5 \strokec5 .\cf8 \strokec8 log\cf5 \strokec5 (\cf7 \strokec7 "testing here"\cf5 \strokec5 )\cf4 \cb1 \strokec4 \
\cb3     
\f0\b \cf2 \strokec2 try
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3       
\f0\b \cf2 \strokec2 if
\f1\b0 \cf5 \strokec5 (\cf6 \strokec6 guessedcheck\cf5 \strokec5 )\{\cf4 \cb1 \strokec4 \
\cb3     
\f0\b \cf2 \strokec2 let
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 topic5\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  
\f0\b \cf2 \strokec2 await
\f1\b0 \cf4 \strokec4  \cf8 \strokec8 getprompt\cf5 \strokec5 ()\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 console\cf5 \strokec5 .\cf8 \strokec8 log\cf5 \strokec5 (\cf6 \strokec6 topic5\cf5 \strokec5 )\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0

\f0\b \cf2 \cb3 \strokec2 let
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 ranint\cf5 \strokec5 =\cf11 \strokec11 Math\cf5 \strokec5 .\cf8 \strokec8 floor\cf5 \strokec5 ((\cf6 \strokec6 Math\cf5 \strokec5 .\cf8 \strokec8 random\cf5 \strokec5 ()\cf4 \strokec4  \cf5 \strokec5 *\cf4 \strokec4  \cf6 \strokec6 topic5\cf5 \strokec5 .\cf6 \strokec6 length\cf5 \strokec5 )\cf4 \strokec4  \cf5 \strokec5 )\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 displayedresponse\cf5 \strokec5 =\cf6 \strokec6 topic5\cf5 \strokec5 [\cf6 \strokec6 ranint\cf5 \strokec5 ].\cf6 \strokec6 responses\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3    \cf8 \strokec8 $w\cf5 \strokec5 (\cf7 \strokec7 '#text29'\cf5 \strokec5 ).\cf6 \strokec6 text\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf6 \strokec6 displayedresponse\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 currentinput\cf5 \strokec5 =\cf6 \strokec6 topic5\cf5 \strokec5 [\cf6 \strokec6 ranint\cf5 \strokec5 ].\cf6 \strokec6 inputs\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6 console\cf5 \strokec5 .\cf8 \strokec8 log\cf5 \strokec5 (\cf6 \strokec6 currentinput\cf5 \strokec5 )\cf4 \cb1 \strokec4 \
\cf6 \cb3 \strokec6 guessedcheck\cf5 \strokec5 =
\f0\b \cf2 \strokec2 false
\f1\b0 \cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 $w\cf5 \strokec5 (\cf7 \strokec7 '#input1'\cf5 \strokec5 ).\cf6 \strokec6 value\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 ""\cf5 \strokec5 ;\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     \cf8 \strokec8 $w\cf5 \strokec5 (\cf7 \strokec7 '#text32'\cf5 \strokec5 ).\cf6 \strokec6 text\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "Feedback: Awaiting guess"\cf4 \cb1 \strokec4 \
\cb3        \cf8 \strokec8 $w\cf5 \strokec5 (\cf7 \strokec7 '#text31'\cf5 \strokec5 ).\cf6 \strokec6 text\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "Please submit a guess for this response"\cf4 \cb1 \strokec4 \
\
\cb3       \cf5 \strokec5 \}
\f0\b \cf2 \strokec2 else
\f1\b0 \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3     \cb1 \
\cb3     \cf8 \strokec8 $w\cf5 \strokec5 (\cf7 \strokec7 '#text32'\cf5 \strokec5 ).\cf6 \strokec6 text\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "Feedback: Please submit a guess for this response first before moving onto the next one!"\cf4 \cb1 \strokec4 \
\cb3  \cf5 \strokec5 \}\cf4 \cb1 \strokec4 \
\cb3    \cf5 \strokec5 \}\cf4 \strokec4  
\f0\b \cf2 \strokec2 catch
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 (\cf6 \strokec6 error\cf5 \strokec5 )\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 console\cf5 \strokec5 .\cf8 \strokec8 error\cf5 \strokec5 (\cf6 \strokec6 error\cf5 \strokec5 );\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 \}\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 \}\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0

\f0\b \cf2 \cb3 \strokec2 async
\f1\b0 \cf4 \strokec4  
\f0\b \cf2 \strokec2 function
\f1\b0 \cf4 \strokec4  \cf8 \strokec8 fetchData\cf4 \strokec4 (\cf5 \strokec5 )\{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     \cf6 \strokec6 console\cf5 \strokec5 .\cf8 \strokec8 log\cf5 \strokec5 (\cf7 \strokec7 "checkpoint1"\cf5 \strokec5 )\cf4 \cb1 \strokec4 \
\cb3     
\f0\b \cf2 \strokec2 try
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3         
\f0\b \cf2 \strokec2 const
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 isLoggedIn\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf6 \strokec6 authentication\cf5 \strokec5 .\cf8 \strokec8 loggedIn\cf5 \strokec5 ();\cf4 \cb1 \strokec4 \
\
\cb3       
\f0\b \cf2 \strokec2 if
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 (!\cf6 \strokec6 isLoggedIn\cf5 \strokec5 )\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3             \cf8 \strokec8 $w\cf5 \strokec5 (\cf7 \strokec7 '#section1'\cf5 \strokec5 ).\cf8 \strokec8 hide\cf5 \strokec5 ()\cf4 \cb1 \strokec4 \
\cb3             \cf8 \strokec8 $w\cf5 \strokec5 (\cf7 \strokec7 '#text34'\cf5 \strokec5 ).\cf6 \strokec6 text\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "Please login with your wix account to unlock full website functions!"\cf4 \cb1 \strokec4 \
\cb3               \cf8 \strokec8 $w\cf5 \strokec5 (\cf7 \strokec7 '#text33'\cf5 \strokec5 ).\cf8 \strokec8 hide\cf5 \strokec5 ()\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 \}\cf4 \cb1 \strokec4 \
\cb3  
\f0\b \cf2 \strokec2 var
\f1\b0 \cf4 \strokec4   \cf6 \strokec6 members\cf5 \strokec5 =\cf4 \strokec4  
\f0\b \cf2 \strokec2 await
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 currentMember\cf5 \strokec5 .\cf8 \strokec8 getMember\cf5 \strokec5 ()\cf4 \cb1 \strokec4 \
\cb3  \cb1 \
\cb3     \cf6 \strokec6 globalid\cf5 \strokec5 =\cf6 \strokec6 members\cf5 \strokec5 .\cf6 \strokec6 _id\cf5 \strokec5 ;\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 fullName\cf4 \strokec4   \cf5 \strokec5 =\cf4 \strokec4  \cf6 \strokec6 members\cf5 \strokec5 .\cf6 \strokec6 contactDetails\cf5 \strokec5 .\cf6 \strokec6 firstName\cf5 \strokec5 +\cf4 \strokec4  \cf7 \strokec7 " "\cf4 \strokec4  \cf5 \strokec5 +\cf4 \strokec4  \cf6 \strokec6 members\cf5 \strokec5 .\cf6 \strokec6 contactDetails\cf5 \strokec5 .\cf6 \strokec6 lastName\cf4 \strokec4  \cf5 \strokec5 ;\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 console\cf5 \strokec5 .\cf8 \strokec8 log\cf5 \strokec5 (\cf6 \strokec6 fullName\cf5 \strokec5 )\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     \cf8 \strokec8 $w\cf5 \strokec5 (\cf7 \strokec7 '#text34'\cf5 \strokec5 ).\cf6 \strokec6 text\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "Welcome "\cf4 \strokec4  \cf5 \strokec5 +\cf4 \strokec4  \cf6 \strokec6 fullName\cf5 \strokec5 ;\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 console\cf5 \strokec5 .\cf8 \strokec8 log\cf5 \strokec5 (\cf6 \strokec6 globalid\cf5 \strokec5 )\cf4 \cb1 \strokec4 \
\cb3   \cb1 \
\cb3  \cf9 \strokec9 // console.log("Welcome " + fullName +"happy")\cf4 \cb1 \strokec4 \
\
\
\cb3         
\f0\b \cf2 \strokec2 let
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 topic2\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  
\f0\b \cf2 \strokec2 await
\f1\b0 \cf4 \strokec4  \cf8 \strokec8 getAll\cf5 \strokec5 ()\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 console\cf5 \strokec5 .\cf8 \strokec8 log\cf5 \strokec5 (\cf6 \strokec6 topic2\cf5 \strokec5 )\cf4 \cb1 \strokec4 \
\cb3                   
\f0\b \cf2 \strokec2 var
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 myTableData\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf5 \strokec5 []\cf4 \cb1 \strokec4 \
\cb3     
\f0\b \cf2 \strokec2 for
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 (
\f0\b \cf2 \strokec2 var
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 i\cf5 \strokec5 =\cf10 \strokec10 0\cf5 \strokec5 ;\cf6 \strokec6 i\cf5 \strokec5 <\cf10 \strokec10 10\cf5 \strokec5 ;\cf4 \strokec4  \cf6 \strokec6 i\cf5 \strokec5 ++)\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 myTableData\cf5 \strokec5 .\cf8 \strokec8 push\cf5 \strokec5 (\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 \{\cf7 \strokec7 "rank"\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 (\cf6 \strokec6 i\cf5 \strokec5 +\cf10 \strokec10 1\cf5 \strokec5 ).\cf8 \strokec8 toLocaleString\cf5 \strokec5 (\cf7 \strokec7 'en'\cf5 \strokec5 ),\cf4 \strokec4  \cf7 \strokec7 "user"\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 topic2\cf5 \strokec5 [\cf6 \strokec6 i\cf5 \strokec5 ].\cf6 \strokec6 Name\cf5 \strokec5 ,\cf4 \strokec4  \cf7 \strokec7 "score"\cf5 \strokec5 :\cf6 \strokec6 topic2\cf5 \strokec5 [\cf6 \strokec6 i\cf5 \strokec5 ].\cf6 \strokec6 score\cf5 \strokec5 .\cf8 \strokec8 toLocaleString\cf5 \strokec5 (\cf7 \strokec7 'en'\cf5 \strokec5 )\}\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 );\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     \cf5 \strokec5 \}\cf4 \cb1 \strokec4 \
\cb3    \cf6 \strokec6 console\cf5 \strokec5 .\cf8 \strokec8 log\cf5 \strokec5 (\cf6 \strokec6 myTableData\cf5 \strokec5 )\cf4 \cb1 \strokec4 \
\cb3        \cf8 \strokec8 $w\cf5 \strokec5 (\cf7 \strokec7 '#table1'\cf5 \strokec5 ).\cf6 \strokec6 rows\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf6 \strokec6 myTableData\cf5 \strokec5 ;\cf4 \cb1 \strokec4 \
\cb3         \cf9 \strokec9 //   let topic = await getAllTasks($w('#input1').value)\cf4 \cb1 \strokec4 \
\cb3             
\f0\b \cf2 \strokec2 let
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 topic\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  
\f0\b \cf2 \strokec2 await
\f1\b0 \cf4 \strokec4  \cf8 \strokec8 getAllTasks\cf5 \strokec5 (\cf6 \strokec6 globalid\cf5 \strokec5 )\cf4 \cb1 \strokec4 \
\cb3      \cb1 \
\cb3             
\f0\b \cf2 \strokec2 if
\f1\b0 \cf5 \strokec5 (\cf6 \strokec6 topic\cf5 \strokec5 .\cf6 \strokec6 length\cf5 \strokec5 ==\cf10 \strokec10 0\cf5 \strokec5 )\{\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 console\cf5 \strokec5 .\cf8 \strokec8 log\cf5 \strokec5 (\cf10 \strokec10 0\cf5 \strokec5 )\cf4 \cb1 \strokec4 \
\cb3                 \cf8 \strokec8 $w\cf5 \strokec5 (\cf7 \strokec7 '#text26'\cf5 \strokec5 ).\cf6 \strokec6 text\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "Your score: 0"\cf5 \strokec5 ;\cf4 \cb1 \strokec4 \
\cb3                 
\f0\b \cf2 \strokec2 await
\f1\b0 \cf4 \strokec4  \cf8 \strokec8 insertTask\cf5 \strokec5 (\cf6 \strokec6 globalid\cf5 \strokec5 ,\cf6 \strokec6 fullName\cf5 \strokec5 );\cf4 \cb1 \strokec4 \
\cb3             \cf5 \strokec5 \}
\f0\b \cf2 \strokec2 else
\f1\b0 \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 console\cf5 \strokec5 .\cf8 \strokec8 log\cf5 \strokec5 (\cf6 \strokec6 topic\cf5 \strokec5 [\cf10 \strokec10 0\cf5 \strokec5 ].\cf6 \strokec6 score\cf5 \strokec5 .\cf8 \strokec8 toLocaleString\cf5 \strokec5 (\cf7 \strokec7 'en'\cf5 \strokec5 ))\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 currentscore\cf5 \strokec5 =\cf6 \strokec6 topic\cf5 \strokec5 [\cf10 \strokec10 0\cf5 \strokec5 ].\cf6 \strokec6 score\cf5 \strokec5 .\cf8 \strokec8 toLocaleString\cf5 \strokec5 (\cf7 \strokec7 'en'\cf5 \strokec5 )\cf4 \cb1 \strokec4 \
\cb3         \cf8 \strokec8 $w\cf5 \strokec5 (\cf7 \strokec7 '#text26'\cf5 \strokec5 ).\cf6 \strokec6 text\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "Your score: "\cf5 \strokec5 +\cf6 \strokec6 topic\cf5 \strokec5 [\cf10 \strokec10 0\cf5 \strokec5 ].\cf6 \strokec6 score\cf5 \strokec5 .\cf8 \strokec8 toLocaleString\cf5 \strokec5 (\cf7 \strokec7 'en'\cf5 \strokec5 );\cf4 \cb1 \strokec4 \
\cb3             \cf5 \strokec5 \}\cf4 \cb1 \strokec4 \
\cb3    \cb1 \
\cb3               \cb1 \
\cb3     \cf5 \strokec5 \}\cf4 \strokec4  
\f0\b \cf2 \strokec2 catch
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 (\cf6 \strokec6 error\cf5 \strokec5 )\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 console\cf5 \strokec5 .\cf8 \strokec8 error\cf5 \strokec5 (\cf6 \strokec6 error\cf5 \strokec5 );\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 \}\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 \}\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0

\f0\b \cf2 \cb3 \strokec2 async
\f1\b0 \cf4 \strokec4  
\f0\b \cf2 \strokec2 function
\f1\b0 \cf4 \strokec4  \cf8 \strokec8 getLogin\cf4 \strokec4 (\cf5 \strokec5 )\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     \cf6 \strokec6 currentMember\cf5 \strokec5 .\cf8 \strokec8 getMember\cf5 \strokec5 ()\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 .\cf8 \strokec8 then\cf5 \strokec5 ((\cf6 \strokec6 members\cf5 \strokec5 )\cf4 \strokec4  \cf5 \strokec5 =>\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3     
\f0\b \cf2 \strokec2 const
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 id\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf6 \strokec6 members\cf5 \strokec5 .\cf6 \strokec6 _id\cf5 \strokec5 ;\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 console\cf5 \strokec5 .\cf8 \strokec8 log\cf5 \strokec5 (\cf6 \strokec6 id\cf5 \strokec5 )\cf4 \cb1 \strokec4 \
\cb3     
\f0\b \cf2 \strokec2 return
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 (\cf6 \strokec6 id\cf5 \strokec5 )\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 \})\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 .
\f0\b \cf2 \strokec2 catch
\f1\b0 \cf5 \strokec5 ((\cf6 \strokec6 error\cf5 \strokec5 )\cf4 \strokec4  \cf5 \strokec5 =>\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 console\cf5 \strokec5 .\cf8 \strokec8 error\cf5 \strokec5 (\cf6 \strokec6 error\cf5 \strokec5 );\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 \});\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 \}\cf4 \cb1 \strokec4 \
\
\
}