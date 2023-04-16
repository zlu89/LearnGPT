{\rtf1\ansi\ansicpg1252\cocoartf2708
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;\f1\fnil\fcharset0 Menlo-Bold;}
{\colortbl;\red255\green255\blue255;\red124\green148\blue183;\red255\green255\blue255;\red18\green34\blue46;
\red21\green45\blue142;\red67\green67\blue67;\red2\green53\blue226;\red116\green0\blue151;\red21\green117\blue58;
}
{\*\expandedcolortbl;;\cssrgb\c55686\c65098\c76863;\cssrgb\c100000\c100000\c100000;\cssrgb\c8627\c17647\c23922;
\cssrgb\c10588\c25490\c62745;\cssrgb\c33333\c33333\c33333;\cssrgb\c0\c31765\c90980;\cssrgb\c53725\c3137\c65882;\cssrgb\c5882\c52157\c29020;
}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 //import \{ generateText \} from '@herbylegall9/gptapi-backend';\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0

\f1\b \cf5 \cb3 \strokec5 import
\f0\b0 \cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  \cf7 \strokec7 generateText\cf4 \strokec4  \cf6 \strokec6 \}\cf4 \strokec4  
\f1\b \cf5 \strokec5 from
\f0\b0 \cf4 \strokec4  \cf8 \cb3 \strokec8 'backend/gtpApi'\cf4 \cb1 \strokec4 \

\f1\b \cf5 \cb3 \strokec5 import
\f0\b0 \cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  \cf7 \strokec7 authentication\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 currentMember\cf4 \strokec4  \cf6 \strokec6 \}\cf4 \strokec4  
\f1\b \cf5 \strokec5 from
\f0\b0 \cf4 \strokec4  \cf8 \cb3 \strokec8 'wix-members'\cf6 \cb3 \strokec6 ;\cf4 \cb1 \strokec4 \
\

\f1\b \cf5 \cb3 \strokec5 import
\f0\b0 \cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  \cf7 \strokec7 getAllTasks\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 insertTask\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 removeTask\cf4 \strokec4  \cf6 \strokec6 \}\cf4 \strokec4  
\f1\b \cf5 \strokec5 from
\f0\b0 \cf4 \strokec4  \cf8 \cb3 \strokec8 'backend/sqlpromptstore'\cf6 \cb3 \strokec6 ;\cf4 \cb1 \strokec4 \

\f1\b \cf5 \cb3 \strokec5 var
\f0\b0 \cf4 \strokec4  \cf7 \strokec7 globalid\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf8 \cb3 \strokec8 ""\cf4 \cb1 \strokec4 \

\f1\b \cf5 \cb3 \strokec5 var
\f0\b0 \cf4 \strokec4  \cf7 \strokec7 fullName\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf8 \cb3 \strokec8 ""\cf4 \cb1 \strokec4 \

\f1\b \cf5 \cb3 \strokec5 var
\f0\b0 \cf4 \strokec4  \cf7 \strokec7 savechecker\cf6 \strokec6 =
\f1\b \cf5 \strokec5 true
\f0\b0 \cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 $w\cf6 \strokec6 .\cf9 \strokec9 onReady\cf6 \strokec6 (
\f1\b \cf5 \strokec5 async
\f0\b0 \cf4 \strokec4  
\f1\b \cf5 \strokec5 function
\f0\b0 \cf4 \strokec4  \cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     \cf9 \strokec9 registerHandlers\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\cb3     \cf9 \strokec9 fetchData\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \});\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0

\f1\b \cf5 \cb3 \strokec5 function
\f0\b0 \cf4 \strokec4  \cf9 \strokec9 registerHandlers\cf4 \strokec4 (\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     \cf7 \strokec7 console\cf6 \strokec6 .\cf9 \strokec9 log\cf6 \strokec6 (\cf8 \cb3 \strokec8 'checkpoint2'\cf6 \cb3 \strokec6 )\cf4 \cb1 \strokec4 \
\cb3     \cf9 \strokec9 $w\cf6 \strokec6 (\cf8 \cb3 \strokec8 '#text34'\cf6 \cb3 \strokec6 ).\cf7 \strokec7 text\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf8 \cb3 \strokec8 ""\cf4 \cb1 \strokec4 \
\
\cb3     \cf9 \strokec9 $w\cf6 \strokec6 (\cf8 \cb3 \strokec8 '#button1'\cf6 \cb3 \strokec6 ).\cf9 \strokec9 onClick\cf6 \strokec6 (()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf9 \strokec9 gptCall\cf6 \strokec6 ());\cf4 \cb1 \strokec4 \
\cb3     \cf9 \strokec9 $w\cf6 \strokec6 (\cf8 \cb3 \strokec8 '#button2'\cf6 \cb3 \strokec6 ).\cf9 \strokec9 onClick\cf6 \strokec6 (()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf9 \strokec9 storeprompt\cf6 \strokec6 ());\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0

\f1\b \cf5 \cb3 \strokec5 async
\f0\b0 \cf4 \strokec4  
\f1\b \cf5 \strokec5 function
\f0\b0 \cf4 \strokec4  \cf9 \strokec9 fetchData\cf4 \strokec4 (\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     \cf7 \strokec7 console\cf6 \strokec6 .\cf9 \strokec9 log\cf6 \strokec6 (\cf8 \cb3 \strokec8 "checkpoint1"\cf6 \cb3 \strokec6 )\cf4 \cb1 \strokec4 \
\cb3     
\f1\b \cf5 \strokec5 try
\f0\b0 \cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3           
\f1\b \cf5 \strokec5 const
\f0\b0 \cf4 \strokec4  \cf7 \strokec7 isLoggedIn\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf7 \strokec7 authentication\cf6 \strokec6 .\cf9 \strokec9 loggedIn\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0

\f1\b \cf5 \cb3 \strokec5 if
\f0\b0 \cf4 \strokec4  \cf6 \strokec6 (!\cf7 \strokec7 isLoggedIn\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3             \cf9 \strokec9 $w\cf6 \strokec6 (\cf8 \cb3 \strokec8 '#section5'\cf6 \cb3 \strokec6 ).\cf9 \strokec9 hide\cf6 \strokec6 ()\cf4 \cb1 \strokec4 \
\cb3             \cf9 \strokec9 $w\cf6 \strokec6 (\cf8 \cb3 \strokec8 '#section4'\cf6 \cb3 \strokec6 ).\cf9 \strokec9 hide\cf6 \strokec6 ()\cf4 \cb1 \strokec4 \
\
\cb3             \cf9 \strokec9 $w\cf6 \strokec6 (\cf8 \cb3 \strokec8 '#text32'\cf6 \cb3 \strokec6 ).\cf7 \strokec7 text\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf8 \cb3 \strokec8 "Please login with your wix account to unlock full website functions!"\cf4 \cb1 \strokec4 \
\cb3               \cf9 \strokec9 $w\cf6 \strokec6 (\cf8 \cb3 \strokec8 '#text33'\cf6 \cb3 \strokec6 ).\cf9 \strokec9 hide\cf6 \strokec6 ()\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\
\cb3                 \cf9 \strokec9 $w\cf6 \strokec6 (\cf8 \cb3 \strokec8 '#button2'\cf6 \cb3 \strokec6 ).\cf9 \strokec9 hide\cf6 \strokec6 ()\cf4 \cb1 \strokec4 \
\
\cb3     
\f1\b \cf5 \strokec5 var
\f0\b0 \cf4 \strokec4   \cf7 \strokec7 members\cf6 \strokec6 =\cf4 \strokec4  
\f1\b \cf5 \strokec5 await
\f0\b0 \cf4 \strokec4   \cf7 \strokec7 currentMember\cf6 \strokec6 .\cf9 \strokec9 getMember\cf6 \strokec6 ()\cf4 \cb1 \strokec4 \
\cb3           \cb1 \
\cb3                 \cf7 \strokec7 globalid\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf7 \strokec7 members\cf6 \strokec6 .\cf7 \strokec7 _id\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3                 \cf7 \strokec7 fullName\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf7 \strokec7 members\cf6 \strokec6 .\cf7 \strokec7 contactDetails\cf6 \strokec6 .\cf7 \strokec7 firstName\cf4 \strokec4  \cf6 \strokec6 +\cf4 \strokec4  \cf8 \cb3 \strokec8 " "\cf4 \cb3 \strokec4  \cf6 \strokec6 +\cf4 \strokec4  \cf7 \strokec7 members\cf6 \strokec6 .\cf7 \strokec7 contactDetails\cf6 \strokec6 .\cf7 \strokec7 lastName\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3               \cb1 \
\cb3                 \cf9 \strokec9 $w\cf6 \strokec6 (\cf8 \cb3 \strokec8 '#text32'\cf6 \cb3 \strokec6 ).\cf7 \strokec7 text\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf8 \cb3 \strokec8 "Welcome "\cf4 \cb3 \strokec4  \cf6 \strokec6 +\cf4 \strokec4  \cf7 \strokec7 fullName\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3               \cb1 \
\cb3     \cf6 \strokec6 \}\cf4 \strokec4  
\f1\b \cf5 \strokec5 catch
\f0\b0 \cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         \cf7 \strokec7 console\cf6 \strokec6 .\cf9 \strokec9 log\cf6 \strokec6 (\cf8 \cb3 \strokec8 "hi"\cf6 \cb3 \strokec6 )\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0

\f1\b \cf5 \cb3 \strokec5 async
\f0\b0 \cf4 \strokec4  
\f1\b \cf5 \strokec5 function
\f0\b0 \cf4 \strokec4  \cf9 \strokec9 gptCall\cf4 \strokec4 (\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     
\f1\b \cf5 \strokec5 try
\f0\b0 \cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         
\f1\b \cf5 \strokec5 let
\f0\b0 \cf4 \strokec4  \cf7 \strokec7 response\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  
\f1\b \cf5 \strokec5 await
\f0\b0 \cf4 \strokec4  \cf9 \strokec9 generateText\cf6 \strokec6 (\cf9 \strokec9 $w\cf6 \strokec6 (\cf8 \cb3 \strokec8 '#input1'\cf6 \cb3 \strokec6 ).\cf7 \strokec7 value\cf4 \strokec4  \cf6 \strokec6 +\cf4 \strokec4  \cf8 \cb3 \strokec8 " in less than 50 words"\cf6 \cb3 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3         \cf9 \strokec9 $w\cf6 \strokec6 (\cf8 \cb3 \strokec8 '#text30'\cf6 \cb3 \strokec6 ).\cf7 \strokec7 text\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf7 \strokec7 response\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3         \cf7 \strokec7 console\cf6 \strokec6 .\cf9 \strokec9 log\cf6 \strokec6 (\cf7 \strokec7 response\cf6 \strokec6 )\cf4 \cb1 \strokec4 \
\cb3         \cf7 \strokec7 savechecker\cf6 \strokec6 =
\f1\b \cf5 \strokec5 true
\f0\b0 \cf4 \cb1 \strokec4 \
\cb3         \cf9 \strokec9 $w\cf6 \strokec6 (\cf8 \cb3 \strokec8 '#button2'\cf6 \cb3 \strokec6 ).\cf9 \strokec9 show\cf6 \strokec6 ()\cf4 \cb1 \strokec4 \
\
\cb3     \cf6 \strokec6 \}\cf4 \strokec4  
\f1\b \cf5 \strokec5 catch
\f0\b0 \cf4 \strokec4  \cf6 \strokec6 (\cf7 \strokec7 error\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         \cf7 \strokec7 console\cf6 \strokec6 .\cf9 \strokec9 error\cf6 \strokec6 (\cf7 \strokec7 error\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0

\f1\b \cf5 \cb3 \strokec5 async
\f0\b0 \cf4 \strokec4  
\f1\b \cf5 \strokec5 function
\f0\b0 \cf4 \strokec4  \cf9 \strokec9 storeprompt\cf4 \strokec4 (\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     
\f1\b \cf5 \strokec5 try
\f0\b0 \cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         
\f1\b \cf5 \strokec5 if
\f0\b0 \cf6 \strokec6 (\cf7 \strokec7 savechecker\cf6 \strokec6 )\{\cf4 \cb1 \strokec4 \
\cb3         \cf9 \strokec9 insertTask\cf6 \strokec6 (\cf7 \strokec7 globalid\cf6 \strokec6 ,\cf9 \strokec9 $w\cf6 \strokec6 (\cf8 \cb3 \strokec8 '#input1'\cf6 \cb3 \strokec6 ).\cf7 \strokec7 value\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 $w\cf6 \strokec6 (\cf8 \cb3 \strokec8 '#text30'\cf6 \cb3 \strokec6 ).\cf7 \strokec7 text\cf6 \strokec6 )\cf4 \cb1 \strokec4 \
\cb3             \cf9 \strokec9 $w\cf6 \strokec6 (\cf8 \cb3 \strokec8 '#text34'\cf6 \cb3 \strokec6 ).\cf7 \strokec7 text\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf8 \cb3 \strokec8 "Saved"\cf4 \cb1 \strokec4 \
\cb3         \cf7 \strokec7 savechecker\cf6 \strokec6 =
\f1\b \cf5 \strokec5 false
\f0\b0 \cf4 \cb1 \strokec4 \
\cb3          \cf9 \strokec9 $w\cf6 \strokec6 (\cf8 \cb3 \strokec8 '#button2'\cf6 \cb3 \strokec6 ).\cf9 \strokec9 hide\cf6 \strokec6 ()\cf4 \cb1 \strokec4 \
\
\cb3         \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3         
\f1\b \cf5 \strokec5 else
\f0\b0 \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3          \cf9 \strokec9 $w\cf6 \strokec6 (\cf8 \cb3 \strokec8 '#text34'\cf6 \cb3 \strokec6 ).\cf7 \strokec7 text\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf8 \cb3 \strokec8 "Already Saved"\cf4 \cb1 \strokec4 \
\
\cb3         \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \strokec4  
\f1\b \cf5 \strokec5 catch
\f0\b0 \cf4 \strokec4  \cf6 \strokec6 (\cf7 \strokec7 error\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         \cf7 \strokec7 console\cf6 \strokec6 .\cf9 \strokec9 error\cf6 \strokec6 (\cf7 \strokec7 error\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf4 \cb1 \strokec4 \
}