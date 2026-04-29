const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API de Pré-Reserva funcionando.");
});

app.post("/api/pre-reserva", async (req, res) => {
  try {
    const { nome, whatsapp, data, servico } = req.body;

    if (!nome || !whatsapp || !data || !servico) {
      return res.status(400).json({
        success: false,
        message: "Todos os campos são obrigatórios.",
      });
    }

    const mensagem = `
🚐 Nova Pré-Reserva Recebida

👤 Nome: ${nome}
📱 WhatsApp: ${whatsapp}
📅 Data desejada: ${data}
🛎️ Serviço: ${servico}

M&S Transporte e Turismo
    `;

    await axios.post(
  `https://api.z-api.io/instances/${process.env.INSTANCE_ID}/token/${process.env.TOKEN}/send-text`,
  {
    phone: process.env.NUMERO_EMPRESA,
    message: mensagem,
  },
  {
    headers: {
      "Client-Token": process.env.CLIENT_TOKEN,
      "Content-Type": "application/json",
    },
  }
);
    return res.status(200).json({
      success: true,
      message: "Pré-reserva enviada com sucesso!",
    });
  } catch (error) {
    console.error(error.response?.data || error.message);

    return res.status(500).json({
      success: false,
      message: "Erro ao enviar pré-reserva.",
    });
  }
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3001}`);
});