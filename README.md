# Realtime Messaging App with Laravel 11 and React

This project is a template for a real-time messaging application using Laravel 11 and React, with Laravel Reverb as the WebSocket server.

## Features

- Send and receive messages in real-time
- Support for emojis and Markdown messages
- Delete your own messages
- Load older messages with infinite scroll
- Send all types of files
- Dedicated buttons for quick image sharing and audio recording
- Preview images, videos, audio, and PDFs in small or full screen
- Add, block, and unblock users
- Grant and revoke admin permissions
- Create, edit, and delete groups
- Update profile details: name, email, password, and profile picture
- Fully responsive UI

## Demo

Try the live demo: [chatappify.net](https://chatappify.net)

## Requirements

Ensure you have installed the following:

- PHP 8.2+
- Composer 2+
- Node.js 18+

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Copy `.env.example` to `.env` and configure the database
4. Install backend dependencies: `composer install`
5. Generate the application key: `php artisan key:generate --ansi`
6. Run migrations and seed the database: `php artisan migrate --seed`
7. Create the storage link: `php artisan storage:link`
8. Install Laravel Reverb: `php artisan reverb:install`
9. Start the Laravel server: `php artisan serve`
10. Install frontend dependencies: `npm install`
11. Start Vite: `npm run dev`
12. Start the WebSocket server: `php artisan reverb:start`
13. Start the background job queue: `php artisan queue:work`

## Usage

Visit http://localhost:8000 and log in using the demo accounts:

**Admin User:**
```
Email: mita@example.com
Password: password
```

**Regular User:**
```
Email: billy@example.com
Password: password
```

Now you can test sending messages between users!

