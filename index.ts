#! /usr/bin/env node

import inquirer from 'inquirer';
// Function to display scenario options and return the next scenario
// Define scenarios as an object


// Define scenarios and options
const scenarios: { [key: string]: { message: string; options: { name: string; next: string }[] } } = {
    start: {
        message: 'You wake up in a mysterious room. What do you do?',
        options: [
            { name: 'Explore the room', next: 'exploreRoom' },
            { name: 'Go back to sleep', next: 'sleep' }
        ]
    },
    exploreRoom: {
        message: 'You find a key on the table and a door on the left. What do you do?',
        options: [
            { name: 'Take the key and open the door', next: 'openDoor' },
            { name: 'Ignore the key and try to open the door', next: 'tryOpenDoor' }
        ]
    },
    sleep: {
        message: 'You fall back asleep and never wake up. Game over!',
        options: []
    },
    openDoor: {
        message: 'The door leads to a dark corridor. You hear strange noises. What do you do?',
        options: [
            { name: 'Proceed cautiously', next: 'proceed' },
            { name: 'Go back to the room', next: 'start' }
        ]
    },
    tryOpenDoor: {
        message: 'The door is locked. You hear footsteps approaching. What do you do?',
        options: [
            { name: 'Hide under the bed', next: 'hide' },
            { name: 'Confront the approaching person', next: 'confront' }
        ]
    },
    proceed: {
        message: 'You cautiously move forward and find a flashlight. What do you do?',
        options: [
            { name: 'Take the flashlight', next: 'takeFlashlight' },
            { name: 'Leave it and keep moving', next: 'leaveFlashlight' }
        ]
    },
    hide: {
        message: 'You hide under the bed and wait. The footsteps fade away. What do you do?',
        options: [
            { name: 'Wait a little longer', next: 'wait' },
            { name: 'Come out and explore', next: 'explore' }
        ]
    },
    confront: {
        message: 'You confront the person, but it turns out to be a friendly explorer. You join forces. Game over!',
        options: []
    },
    takeFlashlight: {
        message: 'You take the flashlight and continue exploring. Game over!',
        options: []
    },
    leaveFlashlight: {
        message: 'You leave the flashlight and keep moving. Game over!',
        options: []
    },
    wait: {
        message: 'You wait a little longer, but nothing happens. What do you do?',
        options: [
            { name: 'Continue waiting', next: 'wait' },
            { name: 'Come out and explore', next: 'explore' }
        ]
    },
    explore: {
        message: 'You come out from hiding and start exploring. You find a way out. Congratulations, you survived!',
        options: []
    }
};

// Function to display scenario options and return the next scenario
async function displayScene(scene: string): Promise<string> {
    const { message, options } = scenarios[scene];
    const choice = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: message,
            choices: options.map(option => option.name)
        }
    ]);
    const nextScene = options.find(option => option.name === choice.action)?.next || 'start';
    return nextScene;
}

// Main game loop
async function startGame() {
    let currentScene = 'start';
    while (true) {
        currentScene = await displayScene(currentScene);
    }
}

// Start the game
startGame();

            
        
    
    


