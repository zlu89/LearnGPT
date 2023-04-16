{\rtf1\ansi\ansicpg1252\cocoartf2708
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Bold;\f1\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red21\green45\blue142;\red255\green255\blue255;\red18\green34\blue46;
\red67\green67\blue67;\red2\green53\blue226;\red116\green0\blue151;\red21\green117\blue58;\red173\green71\blue4;
\red174\green0\blue229;}
{\*\expandedcolortbl;;\cssrgb\c10588\c25490\c62745;\cssrgb\c100000\c100000\c100000;\cssrgb\c8627\c17647\c23922;
\cssrgb\c33333\c33333\c33333;\cssrgb\c0\c31765\c90980;\cssrgb\c53725\c3137\c65882;\cssrgb\c5882\c52157\c29020;\cssrgb\c74118\c35686\c0;
\cssrgb\c74510\c2745\c91765;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\b\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import
\f1\b0 \cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4  \cf6 \strokec6 fetch\cf4 \strokec4  \cf5 \strokec5 \}\cf4 \strokec4  
\f0\b \cf2 \strokec2 from
\f1\b0 \cf4 \strokec4  \cf7 \strokec7 'wix-fetch'\cf5 \strokec5 ;\cf4 \cb1 \strokec4 \
\

\f0\b \cf2 \cb3 \strokec2 export
\f1\b0 \cf4 \strokec4  
\f0\b \cf2 \strokec2 async
\f1\b0 \cf4 \strokec4  
\f0\b \cf2 \strokec2 function
\f1\b0 \cf4 \strokec4  \cf8 \strokec8 generateText\cf4 \strokec4 (\cf6 \strokec6 prompt\cf5 \strokec5 )\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   
\f0\b \cf2 \strokec2 const
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 apiKey\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 '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'\cf5 \strokec5 ;\cf4 \cb1 \strokec4 \
\cb3   
\f0\b \cf2 \strokec2 const
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 apiUrl\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 'https://api.openai.com/v1/engines/text-davinci-003/completions'\cf5 \strokec5 ;\cf4 \cb1 \strokec4 \
\cb3   \cb1 \
\cb3   
\f0\b \cf2 \strokec2 const
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 response\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  
\f0\b \cf2 \strokec2 await
\f1\b0 \cf4 \strokec4  \cf8 \strokec8 fetch\cf5 \strokec5 (\cf6 \strokec6 apiUrl\cf5 \strokec5 ,\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 method\cf5 \strokec5 :\cf4 \strokec4  \cf7 \strokec7 'POST'\cf5 \strokec5 ,\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 headers\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3       \cf7 \strokec7 'Content-Type'\cf5 \strokec5 :\cf4 \strokec4  \cf7 \strokec7 'application/json'\cf5 \strokec5 ,\cf4 \cb1 \strokec4 \
\cb3       \cf7 \strokec7 'Authorization'\cf5 \strokec5 :\cf4 \strokec4  \cf7 \strokec7 `Bearer \cf5 \strokec5 $\{\cf6 \strokec6 apiKey\cf5 \strokec5 \}\cf7 \strokec7 `\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 \},\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 body\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 JSON\cf5 \strokec5 .\cf8 \strokec8 stringify\cf5 \strokec5 (\{\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 prompt\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 prompt\cf5 \strokec5 ,\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 max_tokens\cf5 \strokec5 :\cf4 \strokec4  \cf9 \cb3 \strokec9 100\cf5 \cb3 \strokec5 ,\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 n\cf5 \strokec5 :\cf4 \strokec4  \cf9 \cb3 \strokec9 1\cf5 \cb3 \strokec5 ,\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 stop\cf5 \strokec5 :\cf4 \strokec4  
\f0\b \cf2 \strokec2 null
\f1\b0 \cf5 \strokec5 ,\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 temperature\cf5 \strokec5 :\cf4 \strokec4  \cf9 \cb3 \strokec9 0.5\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 \})\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 \});\cf4 \cb1 \strokec4 \
\
\cb3   
\f0\b \cf2 \strokec2 const
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 result\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  
\f0\b \cf2 \strokec2 await
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 response\cf5 \strokec5 .\cf8 \strokec8 json\cf5 \strokec5 ();\cf4 \cb1 \strokec4 \
\cb3   
\f0\b \cf10 \strokec10 return
\f1\b0 \cf4 \strokec4  \cf6 \strokec6 result\cf5 \strokec5 .\cf6 \strokec6 choices\cf5 \strokec5 [\cf9 \cb3 \strokec9 0\cf5 \cb3 \strokec5 ].\cf6 \strokec6 text\cf5 \strokec5 .\cf8 \strokec8 trim\cf5 \strokec5 ();\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 \}\cf4 \cb1 \strokec4 \
\
\
}