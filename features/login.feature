Feature: Login dos usuários
As a usuário cadastrado no aplicativo
I want to entrar no aplicativo usando meu email e senha cadastrados
Then após login, tenho acesso as funcionalidades do aplicativo

Scenario (service): Login bem-sucedido
Given o sistema possui a conta de e-mail “ze@gmail.com” e senha “ze123” cadastrada
When o sistema recebe uma tentativa de login com os campos de e-mail  e senha preenchidos com “ze@gmail.com” e “ze123”, respectivamente
Then o sistema confirma que essa conta possui cadastro
And o sistema permite o acesso do aplicativo

Scenario (service): Tentativa de login com e-mail ou senha incorretos
Given o sistema possui a conta de e-mail “ze@gmail.com” e senha “ze123” cadastrada
When o sistema recebe uma tentativa de login com os campos de e-mail  e senha preenchidos com “ze@gmail.com” e “ze321”, respectivamente
Then o sistema verifica que não existe conta com e-mail "ze@gmail.com" e senha "ze321"
And o sistema retorna a mensagem "e-mail ou senha incorretos"

Scenario: Login realizado com sucesso
Given estou na página de “Login”
And existe um usuário cadastrado com o e-mail “ze@gmail.com” e senha
“ze123”
When preencho o campo de email com “ze@gmail.com”
And preencho o campo de senha com “ze123”
Then sou encaminhado para a página incial do aplicativo

13-1-dev
13-2-dev