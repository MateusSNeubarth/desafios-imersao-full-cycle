# Criando API de reserva de ingressos com Nest.js

### Neste desafio, você deverá clonar a aplicação Nest.js do projeto da Imersão Full Cycle e implementar algumas coisas:

- A aplicação está dividida em 2 apps (partner1 partner2) + a lib core. Você deverá criar um projeto novo e condensar apenas o partner1 e a lib core no seu novo projeto, ou seja, teremos um projeto Nest.js convencional. Teremos módulos events, spots, prisma, auth.
- A aplicação rodará novamente na porta convencional 3000.
- Use Docker Compose como usamos na aula
- Use apenas a variável MYSQL_DATABASE no docker-compose.yaml em vez do docker-entrypoint-initdb.d
- Validar os dados de entrada de alguns endpoints, ao passar os dados inválidos o Nest.js precisa retornar o status 422 informando os problemas encontrados

### POST /events

- name: obrigatório, string, máximo 255
- description: obrigatório, string, máximo 255
- date: obrigatório, string, formato ISO8601
- price: obrigatório, numbero, mínimo 0

### POST spots

- name: obrigatório, string, máximo 255

### POST /events/:eventId/reserve

- spots: obrigatório, array, string
- ticket_kind: obrigatório, precisa ter os valores “full” ou “half”

### Tratar melhor os erros da operação de reserva via recurso exception filter do Nest.js

- Quando os spots passados não existirem lançar um erro 404 com body “{message: Spots not exists: A1, C3, D5, etc}”
- Quando os spots passados não existirem disponíveis para reservar um erro 400 com body “{message: Spots A1 is not available for reservation”
- Quando lançar um erro no trecho transaction do prisma, precisa responder com status 400 + a mensagem do erro

>Compartilhe o link do repositório Git.

# Notas pessoais
## Nome aos bois
### Nest.JS
- Framework que utiliza de um sistema modular para gerar conexões HTTP com bancos de dados
- Controllers: arquivos responsavei por lidar com resquests e responses do e para o client
- Services: Carregam as regras de negócio dos seus respectivos módulos
- Modules: Classes anotadas com o decorador @Module do Nest.JS para organizar a aplicação na arquitetura modular

### Docker
- Tecnologia de virtualização que cria containers de trabalho que rodam imagens de tecnologias específicas

### Prisma
- Lib que conecta banco de dados à aplicação

## Comandos importantes pro desenvolvimento
### Nest.JS
- nest new (cria o projeto base)
- nest g resource (cria um módulo completo CRUD ou outras opções)
- npm run start:dev (rodar a aplicação em modo de desenvolvimento)

### Prisma
- npx prisma init (iniciar o Prisma na aplicação)
- npx prisma migrate dev (faz a migração e cria os documentos mysql para a construção do banco de dados)

### Docker
- docker compose down (derruba qualquer container construído em execução ou não)
- docker compose up (constrói ou apenas roda container utilizando o documento .yaml na pasta) -d (não tranca o terminal)

## License

Nest is [MIT licensed](LICENSE).
