async function simulateMultipleTasks() {
    const tasks = [
      { delay: 1000, taskNumber: 1 },
      { delay: 2000, taskNumber: 2 },
      { delay: 3000, taskNumber: 3 },
    ];
  
    await Promise.all(tasks.map((task) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`Task ${task.taskNumber} finished`);
          resolve();
        }, task.delay);
      });
    }));
  }
  
  simulateMultipleTasks();
