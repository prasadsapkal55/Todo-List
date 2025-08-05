# 📝 Todo List App

A modern, feature-rich Todo List application built with React and Bootstrap. Stay organized and productive with beautiful themes, advanced task management, and responsive design.

![Todo List App](https://img.shields.io/badge/React-19.0.0-blue?logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-purple?logo=bootstrap)

## ✨ Features

### 🎨 **Multiple Themes**
- **5 Beautiful Color Themes:**
  - 🌅 Sunset Orange - Vibrant pink to yellow gradient
  - 🌲 Forest Green - Fresh nature-inspired theme
  - 💜 Purple Dreams - Elegant light purple theme
  - 🌹 Rose Gold - Warm peachy orange theme
  - ❄️ Arctic Ice - Cool blue to purple theme

### 📋 **Advanced Task Management**
- ✅ **Create, Edit, Delete Tasks** - Full CRUD operations
- 🏷️ **Categories** - Organize with General, Work, Personal, Shopping, Health
- ⭐ **Priority Levels** - High, Medium, Low priority tasks
- 📅 **Due Dates** - Set deadlines and track overdue tasks
- ✔️ **Task Completion** - Mark tasks as complete/incomplete
- 🔍 **Search & Filter** - Find tasks quickly with search and filter options

### 📊 **Analytics Dashboard**
- 📈 **Progress Tracking** - Visual progress bar showing completion percentage
- 📊 **Task Statistics** - Total, completed, and pending task counts
- 🎯 **Real-time Updates** - Live statistics as you manage tasks

### 🎨 **User Experience**
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 💾 **Local Storage** - Tasks and theme preferences persist across sessions
- 🔔 **Notifications** - Success messages for all actions
- ⚡ **Fast Performance** - Optimized React components
- 🎯 **Intuitive Interface** - Clean, modern Bootstrap design

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/prasadsapkal55/Todo-List.git
   cd Todo-List
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`
Builds the app for production to the `build` folder. The build is minified and optimized for best performance.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run eject`
**Note: This is a one-way operation. Once you eject, you can't go back!**

## 🏗️ Project Structure

```
src/
├── App.js              # Main application component
├── App.css             # Custom styles and animations
├── themes.css          # Theme definitions and styling
├── index.js            # Application entry point
└── index.css           # Global styles
```

## 🎯 Usage Guide

### Adding Tasks
1. Enter your task in the input field
2. Select category (General, Work, Personal, Shopping, Health)
3. Choose priority level (Low, Medium, High)
4. Set due date (optional)
5. Click "Add Task" or press Enter

### Managing Tasks
- **Complete Tasks**: Click the checkbox next to any task
- **Edit Tasks**: Click the "Edit" button to modify task text
- **Delete Tasks**: Click the "Delete" button to remove tasks
- **Clear Completed**: Use "Clear Done" to remove all completed tasks

### Filtering & Search
- **Search**: Type in the search box to find tasks by name or category
- **Filter**: Use the dropdown to show All, Pending, or Completed tasks

### Changing Themes
- Click any of the 5 colored circles in the theme selector
- Your theme preference is automatically saved

## 🎨 Customization

### Adding New Themes
1. Open `src/themes.css`
2. Add a new theme class following the existing pattern:
   ```css
   .theme-yourtheme {
     --primary-gradient: your-gradient;
     --card-bg: #ffffff;
     --primary-color: your-color;
     /* ... other variables */
   }
   ```
3. Add theme to the `themes` array in `App.js`
4. Add preview class for the theme selector

### Modifying Categories
Edit the category options in the `App.js` component:
```javascript
<option value="yourcategory">🎯 Your Category</option>
```

## 🧪 Technologies Used

- **Frontend Framework**: React 19.0.0
- **UI Library**: React Bootstrap 2.10.9
- **Styling**: Bootstrap 5.3.3 + Custom CSS
- **State Management**: React Hooks (useState, useEffect)
- **Data Persistence**: Browser localStorage
- **Build Tool**: Create React App

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Features Breakdown

| Feature | Description | Status |
|---------|-------------|--------|
| Task CRUD | Create, Read, Update, Delete tasks | ✅ |
| Categories | 5 predefined categories with icons | ✅ |
| Priorities | 3-level priority system | ✅ |
| Due Dates | Date picker with overdue detection | ✅ |
| Search | Real-time task search | ✅ |
| Filtering | Filter by completion status | ✅ |
| Themes | 5 beautiful color themes | ✅ |
| Responsive | Mobile-first design | ✅ |
| Persistence | localStorage integration | ✅ |
| Analytics | Progress tracking dashboard | ✅ |

## 🚀 Performance Optimizations

- **Efficient Rendering**: Optimized React components
- **Local Storage**: No external database dependencies
- **Responsive Images**: Optimized for all screen sizes
- **Minimal Bundle**: Clean, unused code removed
- **Fast Load Times**: Optimized CSS and JavaScript

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Bootstrap Team** - For the beautiful UI components
- **Community** - For inspiration and feedback

## 📞 Support

If you have any questions or need help:
- Create an issue in the repository
- Check the documentation above
- Review the code comments for implementation details

---

**Made with ❤️ using React and Bootstrap**

*Stay organized, stay productive! 🎯*
