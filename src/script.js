function criptografar(texto) {
    // Substituições para criptografia
    const substituicoes = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };
    
    // Criptografando o texto
    let textoCriptografado = texto.replace(/e|i|a|o|u/g, function(letra) {
        return substituicoes[letra];
    });
    
    return textoCriptografado;
}

// Função para capturar o texto do input, criptografá-lo e exibir o resultado
function lerText() {
    const inputText = document.getElementById('inputText').value;
    const textoCriptografado = criptografar(inputText);
    
    const messageDiv = document.getElementById('mmss');
    messageDiv.innerHTML = `
        <div class="saida">
            <p class="out-text" id="outputText">${textoCriptografado}</p>
            <div class="buttons">
                <button class= "copiar-buton" onclick="copiarTexto()">Copiar texto</button>
            </div>
        <div>
    `;  // Substitui o conteúdo da div .message pelo texto criptografado e adiciona o botão de copiar
}

// Função para copiar o texto do output
function copiarTexto() {
    const texto = document.getElementById('outputText').textContent;
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado para a área de transferência');
    }).catch(err => {
        console.error('Erro ao copiar o texto: ', err);
    });
}

function descriptografar(textoCriptografado) {
    // Substituições para descriptografia
    const substituicoesInversas = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };
    
    // Descriptografando o texto
    let textoDescriptografado = textoCriptografado.replace(/enter|imes|ai|ober|ufat/g, function(palavra) {
        return substituicoesInversas[palavra];
    });
    
    return textoDescriptografado;
}

function descriptografaText() {
    const inputText = document.getElementById('inputText').value;
    const textoDescriptografado = descriptografar(inputText);
    
    const messageDiv = document.getElementById('mmss');
    messageDiv.innerHTML = `
        <p id="outputText">${textoDescriptografado}</p>
        <button onclick="copiarTexto()">Copiar texto</button>
    `;
}
