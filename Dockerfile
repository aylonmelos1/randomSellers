# Use a imagem oficial do Node.js como base
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código do seu app para o diretório de trabalho
COPY . .

# Expõe a porta que o app vai rodar
EXPOSE 3387

# Comando para iniciar o app
CMD ["npm", "start"]