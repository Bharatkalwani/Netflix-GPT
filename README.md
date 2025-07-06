# Netflix GPT

This project is a Netflix-inspired movie browsing application with an integrated GPT-powered search functionality. Built using React, Redux, and OpenAI GPT, it replicates core Netflix features while adding AI-enhanced movie discovery.

🔐 Authentication
Login & Register functionality with basic form validation.

User data is saved in JSON (in-memory or local state).

Post-login redirect to the main browser page.

🎬 Browser Page (Post Login)
Header Navigation Bar with logout and navigation.

Hero Section showing the featured movie trailer in the background, with title and description overlay.

Movie Suggestions dynamically listed from various categories.

Responsive Movie Lists including:

Now Playing

Top Rated

Popular

Upcoming

🤖 Netflix GPT Integration
GPT-powered search bar using OpenAI to suggest relevant movie titles.

Intelligent recommendations based on user input.

Smooth user experience mimicking Netflix search suggestions.

✨ UI Enhancements
Shimmer UI loading effect for a polished, modern experience during API data fetch.

⚙️ Performance Optimization
Memoization techniques to prevent redundant API calls and improve rendering efficiency.



# Features
- Login and register save data in json and validate
 - Login sign up form and redirect to browser page 
 - Browser after login 
    - header 
    - main movie 
      -  trailer in background 
      - title and description 
      - MoviewSuggestions 
      - moview lists
  - netflex gpt 
     - search bar 
     - moview suggestions  
- shimmer UI effect  
- Memoization- to reduce apis calls   

# Pending 
- each movie page show trailer movie details 
- scroll api hit page  & debounce
- react security
- image background issue 
- polling  R & d 


