     // untuk menampilkan angka dari button ke display
     function addToDisplay(value) {
      document.getElementById("display").value += value;
    }
  
    // untuk menghitung angka yang di display
    function calculate() {
      const display = document.getElementById("display");
      const history = document.getElementById("history");
      const sideHistory = document.getElementById("side-history");
  
      // Mengganti simbol kembali ke format yang bisa dievaluasi
      let expression = display.value.replace(/x/g, "*").replace(/÷/g, "/");
  
      try {
        const result = eval(expression);
        history.textContent = `${display.value} = ${result}`;
        const historyEntry = document.createElement("div");
        historyEntry.classList.add("history-entry");
        historyEntry.textContent = `${display.value} = ${result}`;
        sideHistory.appendChild(historyEntry);
  
        display.value = result; // Tampilkan hasil di display
      } catch (error) {
        display.value = "Error";
      }
    }
  
    // untuk menghapus semua isi di display
    function clearDisplay() {
      document.getElementById("display").value = "";
      document.getElementById("history").textContent = "";
    }
  
    // untuk menghapus angka terakhir di display
    function deleteLast() {
      const display = document.getElementById("display");
      display.value = display.value.slice(0, -1);
    }
  
    // untuk menghapus seluruh riwayat di dalam history container
    function clearHistory() {
      const sideHistory = document.getElementById("side-history");
      sideHistory.innerHTML = ""; // Hapus seluruh riwayat
    }
  
    // untuk menampilkan dan menyembunyikan history-container
    function toggleHistory() {
      const historyContainer = document.getElementById("historyContainer");
      historyContainer.style.display = historyContainer.style.display === "none" || historyContainer.style.display === "" ? "flex" : "none";
    }
  
    // Menangkap input dari keyboard
    document.addEventListener("keydown", function (event) {
      const display = document.getElementById("display");
      const key = event.key;
  
      if ((key >= "0" && key <= "9") || "+-x/.%".includes(key)) {
        // Mengganti simbol jika ditekan di keyboard
        addToDisplay(key.replace("x", "x").replace("/", "÷"));
      } else if (key === "Enter" || key === "=") {
        calculate();
      } else if (key === "Backspace") {
        deleteLast();
      } else if (key === "Escape") {
        clearDisplay();
      }else if (key === "h") {
      // Tombol H untuk toggle history
        toggleHistory();
      }else if (key === "Delete") {
        clearHistory();
      }
    });