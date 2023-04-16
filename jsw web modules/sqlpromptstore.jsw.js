{\rtf1\ansi\ansicpg1252\cocoartf2708
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Bold;\f1\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red21\green45\blue142;\red255\green255\blue255;\red18\green34\blue46;
\red67\green67\blue67;\red2\green53\blue226;\red116\green0\blue151;\red21\green117\blue58;\red174\green0\blue229;
\red124\green148\blue183;}
{\*\expandedcolortbl;;\cssrgb\c10588\c25490\c62745;\cssrgb\c100000\c100000\c100000;\cssrgb\c8627\c17647\c23922;
\cssrgb\c33333\c33333\c33333;\cssrgb\c0\c31765\c90980;\cssrgb\c53725\c3137\c65882;\cssrgb\c5882\c52157\c29020;\cssrgb\c74510\c2745\c91765;
\cssrgb\c55686\c65098\c76863;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\b\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4  \cf6 \strokec6 sql\cf4 \strokec4  \cf5 \strokec5 \}\cf4 \strokec4  
\f0\b \cf2 \strokec2 from
\f1\b0 \cf4 \strokec4  \cf7 \strokec7 '@velo/wix-data-sql-backend'\cf5 \strokec5 ;\cf4 \cb1 \strokec4 \
\

\f0\b \cf2 \cb3 \strokec2 export
\f1\b0 \cf4 \strokec4  
\f0\b \cf2 \strokec2 async
\f1\b0 \cf4 \strokec4  
\f0\b \cf2 \strokec2 function
\f1\b0 \cf4 \strokec4  \cf8 \strokec8 getAllTasks\cf4 \strokec4 (\cf6 \strokec6 userid\cf5 \strokec5 )\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     
\f0\b \cf2 \strokec2 try
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3         
\f0\b \cf2 \strokec2 const
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 results\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  
\f0\b \cf2 \strokec2 await
\f1\b0 \cf4 \strokec4  \cf8 \strokec8 sql\cf5 \strokec5 (\cf7 \strokec7 'SELECT * FROM UserPrompts Where user = "'\cf4 \strokec4  \cf5 \strokec5 +\cf4 \strokec4  \cf6 \strokec6 userid\cf4 \strokec4  \cf5 \strokec5 +\cf4 \strokec4  \cf7 \strokec7 '"'\cf5 \strokec5 );\cf4 \cb1 \strokec4 \
\cb3         
\f0\b \cf9 \strokec9 return
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 results\cf5 \strokec5 .\cf6 \strokec6 payload\cf5 \strokec5 .\cf6 \strokec6 data\cf5 \strokec5 .\cf6 \strokec6 rows\cf5 \strokec5 ;\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 \}\cf4 \strokec4  
\f0\b \cf2 \strokec2 catch
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 (\cf6 \strokec6 error\cf5 \strokec5 )\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 console\cf5 \strokec5 .\cf8 \strokec8 error\cf5 \strokec5 (\cf6 \strokec6 error\cf5 \strokec5 );\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 \}\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 \}\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0

\f0\b \cf2 \cb3 \strokec2 export
\f1\b0 \cf4 \strokec4  
\f0\b \cf2 \strokec2 async
\f1\b0 \cf4 \strokec4  
\f0\b \cf2 \strokec2 function
\f1\b0 \cf4 \strokec4  \cf8 \strokec8 insertTask\cf4 \strokec4 (\cf6 \strokec6 userid\cf5 \strokec5 ,\cf6 \strokec6 pro\cf5 \strokec5 ,\cf6 \strokec6 resp\cf5 \strokec5 )\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     
\f0\b \cf2 \strokec2 try
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3         
\f0\b \cf2 \strokec2 await
\f1\b0 \cf4 \strokec4  \cf8 \strokec8 sql\cf5 \strokec5 (\cf7 \strokec7 'INSERT INTO UserPrompts (user, prompt , response) VALUES ("'\cf4 \strokec4  \cf5 \strokec5 +\cf4 \strokec4  \cf6 \strokec6 userid\cf4 \strokec4  \cf5 \strokec5 +\cf4 \strokec4  \cf7 \strokec7 '" , "'\cf4 \strokec4  \cf5 \strokec5 +\cf4 \strokec4  \cf6 \strokec6 pro\cf4 \strokec4  \cf5 \strokec5 +\cf4 \strokec4  \cf7 \strokec7 '" , "'\cf4 \strokec4  \cf5 \strokec5 +\cf4 \strokec4  \cf6 \strokec6 resp\cf4 \strokec4  \cf5 \strokec5 +\cf4 \strokec4  \cf7 \strokec7 '")'\cf5 \strokec5 );\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 \}\cf4 \strokec4  
\f0\b \cf2 \strokec2 catch
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 (\cf6 \strokec6 error\cf5 \strokec5 )\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 console\cf5 \strokec5 .\cf8 \strokec8 error\cf5 \strokec5 (\cf6 \strokec6 error\cf5 \strokec5 );\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 \}\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 \}\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf10 \cb3 \strokec10 // this function is different from the previous ones as it returns a promise\cf4 \cb1 \strokec4 \
\cf10 \cb3 \strokec10 // this is done in order to allow calling it several times without waiting to each call to complete\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0

\f0\b \cf2 \cb3 \strokec2 export
\f1\b0 \cf4 \strokec4  
\f0\b \cf2 \strokec2 function
\f1\b0 \cf4 \strokec4  \cf8 \strokec8 removeTask\cf4 \strokec4 (\cf6 \strokec6 taskID\cf5 \strokec5 ,\cf6 \strokec6 pro\cf5 \strokec5 )\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     
\f0\b \cf2 \strokec2 try
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3         
\f0\b \cf2 \strokec2 const
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 removePromise\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf8 \strokec8 sql\cf5 \strokec5 (\cf7 \strokec7 'DELETE FROM UserPrompts WHERE user = "'\cf4 \strokec4  \cf5 \strokec5 +\cf4 \strokec4  \cf6 \strokec6 taskID\cf4 \strokec4  \cf5 \strokec5 +\cf4 \strokec4  \cf7 \strokec7 '" and prompt =  "'\cf4 \strokec4  \cf5 \strokec5 +\cf4 \strokec4  \cf6 \strokec6 pro\cf4 \strokec4   \cf5 \strokec5 +\cf4 \strokec4  \cf7 \strokec7 '"'\cf5 \strokec5 );\cf4 \cb1 \strokec4 \
\cb3         
\f0\b \cf9 \strokec9 return
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 removePromise\cf5 \strokec5 ;\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 \}\cf4 \strokec4  
\f0\b \cf2 \strokec2 catch
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 (\cf6 \strokec6 error\cf5 \strokec5 )\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 console\cf5 \strokec5 .\cf8 \strokec8 error\cf5 \strokec5 (\cf6 \strokec6 error\cf5 \strokec5 );\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 \}\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 \}\cf4 \cb1 \strokec4 \
}