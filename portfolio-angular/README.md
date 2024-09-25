
## API Endpoints

### Authentication

- **POST /api/auth/signup**: Register a new user.
- **POST /api/auth/login**: Log in an existing user.

## Configuration

- To modify the API base URL, update the `src/app/api.config.ts` file.
- Ensure your Node.js backend is running on the specified port.


## Adding Exercises Data

Create a file named exercises.json in your project's assets directory and paste the JSON data into it.
To populate the exercises in the application, you need to provide a JSON array containing the exercise details. Below is the structure for each exercise entry:


```json
{
  "id": <number>, // Unique identifier for the exercise
  "name": "<string>", // Name of the exercise
  "description": "<string>", // Brief description of the exercise
  "type": "<string>", // Type of exercise (e.g., Mindfulness, CBT, Journaling)
  "duration": "<string>", // Duration of the exercise (e.g., "5 minutes")
  "helpsWith": "<string>", // List of issues the exercise helps with
  "steps": [ // Array of steps to perform the exercise
    "<string>", // Each step as a string
    ...
  ]
}


## Excersises Examples
[
  {
    "id": 1,
    "name": "Mindfulness Breathing",
    "description": "A breathing exercise to help calm the mind and reduce anxiety by focusing on deep, slow breathing.",
    "type": "Mindfulness",
    "duration": "5 minutes",
    "helpsWith": "Anxiety, Stress, Emotional Regulation",
    "steps": [
      "Find a Comfortable Position: Sit or lie down in a comfortable position.",
      "Close Your Eyes: This helps reduce distractions and increases focus.",
      "Breathe In Slowly: Inhale deeply through your nose for a count of 4, feeling your belly expand.",
      "Hold Your Breath: Hold your breath for a count of 4.",
      "Breathe Out Slowly: Exhale slowly through your mouth for a count of 6, letting go of any tension.",
      "Repeat: Continue this cycle for 5 minutes, focusing solely on your breath and the sensation of air entering and leaving your body.",
      "Finish: Slowly open your eyes, take a moment to notice how you feel, and gradually transition back to your day."
    ]
  },
  {
    "id": 2,
    "name": "Thought Recording",
    "description": "A CBT exercise designed to identify and challenge negative thought patterns.",
    "type": "CBT",
    "duration": "10 minutes",
    "helpsWith": "Depression, Anxiety, Negative Thought Patterns",
    "steps": [
      "Identify Negative Thoughts: When you notice a negative thought, write it down in a journal.",
      "Record the Situation: Note the situation or event that triggered this thought.",
      "Examine the Thought: Identify any cognitive distortions (e.g., all-or-nothing thinking, overgeneralization).",
      "Challenge the Thought: Ask yourself questions to challenge the validity of the thought (e.g., 'What evidence do I have that supports or contradicts this thought?').",
      "Replace with Balanced Thought: Write down a more balanced or realistic thought that counteracts the negative one.",
      "Reflect: Note how you feel after challenging the thought and replacing it with a more balanced perspective.",
      "Repeat: Practice this regularly to help shift your thought patterns over time."
    ]
  }
  // Additional exercises can be added in the same format
]




# Book Recommendations

## Create a JSON File for Book Data: Create a file named books.json in the assets folder with the following example data:

### json

[
  {
    "id": 1,
    "title": "The Power of Now",
    "author": "Eckhart Tolle",
    "description": "A guide to spiritual enlightenment and living in the present moment.",
    "topics": ["Mindfulness", "Spirituality", "Presence"],
    "review": "A transformative book that helps you understand the importance of living in the now, letting go of past and future worries."
  },
  {
    "id": 2,
    "title": "Feeling Good: The New Mood Therapy",
    "author": "David D. Burns",
    "description": "A classic self-help book that teaches cognitive behavioral techniques to combat depression.",
    "topics": ["Cognitive Behavioral Therapy", "Depression", "Self-Help"],
    "review": "Offers practical techniques to help overcome negative thoughts and feelings, making it a valuable resource for anyone struggling with depression."
  },
  {
    "id": 3,
    "title": "The Gifts of Imperfection",
    "author": "Brené Brown",
    "description": "Encourages embracing vulnerability and imperfections to cultivate self-worth.",
    "topics": ["Self-Compassion", "Vulnerability", "Personal Growth"],
    "review": "A heartfelt guide that encourages readers to let go of the need for perfection and embrace their authentic selves."
  }
  // Add more book entries as needed
]

