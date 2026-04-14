const input = document.getElementById("inputText");
const result = document.getElementById("result");
const error = document.getElementById("error");

const reverseBtn = document.getElementById("reverseBtn");
const copyBtn = document.getElementById("copyBtn");

function reverseString(str) {
    return str.split('').reverse().join('');
}

function validateInput(text) {
    if (!text) {
        return "Please enter some text.";
    }

    if (text.length > 1000) {
        return "Text is too long. Maximum 1000 characters allowed.";
    }

    return null;
}

reverseBtn.addEventListener("click", () => {
    const text = input.value.trim();

    error.textContent = "";
    result.textContent = "";

    const validationError = validateInput(text);

    if (validationError) {
        error.textContent = validationError;
        return;
    }

    const reversed = reverseString(text);
    result.textContent = reversed;
});

copyBtn.addEventListener("click", () => {
    const text = result.textContent;

    if (!text) {
        return;
    }

    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Copied to clipboard!");
        })
        .catch(() => {
            error.textContent = "Failed to copy text.";
        });
});