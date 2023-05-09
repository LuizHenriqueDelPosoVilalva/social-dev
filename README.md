# social-dev
<p>Uma rede social com sistema de login e cadastro com apresentação de erros nos inputs na tela do usuário caso ele tente mandar inputs vazios ou que excedam
  o limite de caracteres, dentro da rede é possível publicar textos, textos esses ficaram públicos para todos que entrarem na rede verem, podendo também editar e deletar publicações de sua autoria.      
<p/>

### Frontend
<p>Foi utilizado no frontend React, NextJs e styled-componets.</p>

### Backend
<p>Backend foi feito utilizando NodeJs.</p>

### Banco de dados
<p>Os dados dos usuários foram salvos em banco de dados Nosql, o MongooDB através do ORM Mongoose</p>

## Como utilizar o projeto
<p>Baixe o projeto e abra ele na sua IDE, digite no terminal npm install -y para instalar todas a bibliotecas do projeto na sua maquina,
  va no banco de dados <a href="https://www.mongodb.com/cloud/atlas/lp/try4?utm_content=controlhterms&utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_prosp-brand_gic-null_amers-br_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624308&adgroup=115749706023&cq_cmp=12212624308&gad=1&gclid=Cj0KCQjwu-KiBhCsARIsAPztUF0cJKHhSDlyjy_nnLwuckHdxXrBBoA0gxoNCLcia8PsZIfVPZt8I4YaAmgBEALw_wcB">MongoDB(clique aqui e vá para o banco)</a> 
  logue ou se cadastre no banco, crie o seu banco gratuito, salve a URI do banco em algum lugar com a senha e o usuário do banco já inseridas nessa URI, agora entre no projeto crie um arquivo com o nome de .env.local nesse arquivo crie quatro variáveis, com os nomes de MONGODB_URI, SESSION_TOKEN_NAME, SESSION_PASSWORD e NEXT_PUBLIC_API_URL, essa variaveis teram os seguintes valores:</p>
  <h4>MONGODB_URI=URI do banco com as alterações mencionadas acima</h4>
  <h4>SESSION_TOKEN_NAME=Usuário responsavel pelos tokens</h4>
  <h4>SESSION_PASSWORD=Senha responsável pelo tokens, essa senha tem ter mais de trinta e dois caracteres</h4>
  <h4>NEXT_PUBLIC_API_URL= passe aqui uma string vazia""</h4>
  
  <p>Realizando todos esses passos o projeto vai funcionar para vocês</p>

