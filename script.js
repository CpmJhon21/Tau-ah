document.getElementById('menuButton').addEventListener('click', () => {
        document.getElementById('menu').classList.toggle('hidden');
      });

      document.getElementById('myComputerButton').addEventListener('click', () => {
        document.getElementById('myComputerContainer').classList.toggle('hidden');
        document.getElementById('menu').classList.add('hidden');
      });

      document.getElementById('hwButton').addEventListener('click', () => {
        document.getElementById('hwContainer').classList.toggle('hidden');
        document.getElementById('menu').classList.add('hidden');
      });

      document.getElementById('peripheralButton').addEventListener('click', () => {
        document.getElementById('peripheralContainer').classList.toggle('hidden');
        document.getElementById('menu').classList.add('hidden');
      });

      document.getElementById('myComputerClose').addEventListener('click', () => {
        document.getElementById('myComputerContainer').classList.add('hidden');
      });

      document.getElementById('hwClose').addEventListener('click', () => {
        document.getElementById('hwContainer').classList.add('hidden');
      });

      document.getElementById('peripheralClose').addEventListener('click', () => {
        document.getElementById('peripheralContainer').classList.add('hidden');
      });

      // Splash screen logic
      window.addEventListener('load', () => {
        setTimeout(() => {
          document.getElementById('splashScreen').classList.add('hidden');
          document.getElementById('mainContent').classList.remove('hidden');
        }, 3000); // Adjust the timeout as needed
      });

      // Play background music
      const backgroundMusic = document.getElementById('backgroundMusic');
      backgroundMusic.play();
