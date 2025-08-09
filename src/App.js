import './App.css';
import './themes.css';
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";  
import Container from "react-bootstrap/Container";  
import Row from "react-bootstrap/Row";  
import Col from "react-bootstrap/Col";  
import Button from "react-bootstrap/Button";  
import InputGroup from "react-bootstrap/InputGroup";  
import FormControl from "react-bootstrap/FormControl";  
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import ProgressBar from "react-bootstrap/ProgressBar";

function App() {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [editText, setEditText] = useState("");
  const [category, setCategory] = useState("general");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [currentTheme, setCurrentTheme] = useState("theme-sunset");

  const themes = [
    { name: "theme-sunset", label: "Sunset Orange", preview: "theme-sunset-preview" },
    { name: "theme-forest", label: "Forest Green", preview: "theme-forest-preview" },
    { name: "theme-purple", label: "Purple Dreams", preview: "theme-purple-preview" },
    { name: "theme-rose", label: "Rose Gold", preview: "theme-rose-preview" },
    { name: "theme-arctic", label: "Arctic Ice", preview: "theme-arctic-preview" }
  ];

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('todoTheme');
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.className = currentTheme;
    localStorage.setItem('todoTheme', currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    const savedTasks = localStorage.getItem('todoTasks');
    if (savedTasks) {
      setList(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todoTasks', JSON.stringify(list));
  }, [list]);

  const showNotification = (message) => {
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const addItem = () => {
    if (userInput.trim() !== "") {
      const newTask = {
        id: Date.now(),
        value: userInput.trim(),
        completed: false,
        category: category,
        priority: priority,
        dueDate: dueDate,
        createdAt: new Date().toISOString()
      };

      setList([...list, newTask]);
      setUserInput("");
      setCategory("general");
      setPriority("medium");
      setDueDate("");
      showNotification("Task added successfully!");
    } else {
      showNotification("Please enter a valid task!");
    }
  };

  const deleteItem = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
    showNotification("Task deleted successfully!");
  };

  const toggleComplete = (id) => {
    const updatedList = list.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setList(updatedList);
  };

  const editItem = (task) => {
    setEditingTask(task);
    setEditText(task.value);
    setShowModal(true);
  };

  const saveEdit = () => {
    if (editText.trim() !== "") {
      const updatedList = list.map(item =>
        item.id === editingTask.id ? { ...item, value: editText.trim() } : item
      );
      setList(updatedList);
      setShowModal(false);
      setEditingTask(null);
      setEditText("");
      showNotification("Task updated successfully!");
    }
  };

  const clearCompleted = () => {
    const updatedList = list.filter(item => !item.completed);
    setList(updatedList);
    showNotification("Completed tasks cleared!");
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'danger';
      case 'medium': return 'warning';
      case 'low': return 'success';
      default: return 'secondary';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'work': return 'primary';
      case 'personal': return 'info';
      case 'shopping': return 'success';
      case 'health': return 'warning';
      default: return 'secondary';
    }
  };

  const getFilteredTasks = () => {
    let filtered = list;

    if (filter === "completed") {
      filtered = filtered.filter(item => item.completed);
    } else if (filter === "pending") {
      filtered = filtered.filter(item => !item.completed);
    }

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.value.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  };

  const getTaskStats = () => {
    const total = list.length;
    const completed = list.filter(item => item.completed).length;
    const pending = total - completed;
    const completionPercentage = total > 0 ? (completed / total) * 100 : 0;

    return { total, completed, pending, completionPercentage };
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };

  const stats = getTaskStats();
  const filteredTasks = getFilteredTasks();

  return (
    <Container className="my-4">
      <div className="theme-selector d-block d-md-block">
        <div className="d-flex flex-wrap">
          {themes.map((theme) => (
            <div
              key={theme.name}
              className={`theme-option ${theme.preview} ${currentTheme === theme.name ? 'active' : ''}`}
              onClick={() => setCurrentTheme(theme.name)}
              title={theme.label}
            />
          ))}
        </div>
      </div>

      {/* Alert for notifications */}
      {showAlert && (
        <Alert variant="success" className="position-fixed" style={{ top: '20px', right: '20px', zIndex: 1050, width: '300px' }}>
          {alertMessage}
        </Alert>
      )}

      {/* Header */}
      <Row className="text-center mb-4">
        <Col>
          <h1 className="display-4 text-primary fw-bold">
            📝 Todo List
          </h1>
          <p className="lead text-muted">Stay organized and productive!</p>
        </Col>
      </Row>

      {/* Stats Dashboard */}
      <Row className="mb-4">
        <Col md={12}>
          <div className="bg-light p-3 rounded shadow-sm">
            <Row>
              <Col md={3} className="text-center">
                <h5>Total Tasks</h5>
                <Badge bg="primary" className="fs-6">{stats.total}</Badge>
              </Col>
              <Col md={3} className="text-center">
                <h5>Completed</h5>
                <Badge bg="success" className="fs-6">{stats.completed}</Badge>
              </Col>
              <Col md={3} className="text-center">
                <h5>Pending</h5>
                <Badge bg="warning" className="fs-6">{stats.pending}</Badge>
              </Col>
              <Col md={3} className="text-center">
                <h5>Progress</h5>
                <ProgressBar 
                  variant="success" 
                  now={stats.completionPercentage} 
                  label={`${Math.round(stats.completionPercentage)}%`}
                  className="mt-2"
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      {/* Add Task Form */}
      <Row className="mb-4">
        <Col md={{ span: 8, offset: 2 }}>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="mb-3">Add New Task</h4>
            
            <InputGroup className="mb-3">
              <FormControl
                placeholder="What needs to be done?"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
                size="lg"
              />
              <Button 
                variant="primary" 
                onClick={addItem}
                size="lg"
              >
                ➕ Add Task
              </Button>
            </InputGroup>

            <Row>
              <Col md={4}>
                <Form.Label>Category</Form.Label>
                <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="general">📋 General</option>
                  <option value="work">💼 Work</option>
                  <option value="personal">👤 Personal</option>
                  <option value="shopping">🛒 Shopping</option>
                  <option value="health">🏥 Health</option>
                </Form.Select>
              </Col>
              <Col md={4}>
                <Form.Label>Priority</Form.Label>
                <Form.Select value={priority} onChange={(e) => setPriority(e.target.value)}>
                  <option value="low">🟢 Low</option>
                  <option value="medium">🟡 Medium</option>
                  <option value="high">🔴 High</option>
                </Form.Select>
              </Col>
              <Col md={4}>
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      {/* Search and Filter */}
      <Row className="mb-4">
        <Col md={{ span: 8, offset: 2 }}>
          <Row>
            <Col md={6}>
              <InputGroup>
                <InputGroup.Text>🔍</InputGroup.Text>
                <FormControl
                  placeholder="Search tasks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
            </Col>
            <Col md={4}>
              <Form.Select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All Tasks</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </Form.Select>
            </Col>
            <Col md={2}>
              <Button variant="outline-danger" onClick={clearCompleted}>
                🗑️ Clear Done
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Task List */}
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          {filteredTasks.length === 0 ? (
            <div className="text-center p-5">
              <h3 className="text-muted">🎉 No tasks found!</h3>
              <p className="text-muted">
                {list.length === 0 
                  ? "Add your first task to get started!" 
                  : "Try adjusting your search or filter."}
              </p>
            </div>
          ) : (
            <ListGroup className="shadow">
              {filteredTasks.map((item, index) => {
                const isOverdue = item.dueDate && new Date(item.dueDate) < new Date() && !item.completed;
                
                return (
                  <ListGroup.Item
                    key={item.id}
                    className={`d-flex justify-content-between align-items-center ${
                      item.completed ? 'bg-light text-muted' : ''
                    } ${isOverdue ? 'border-danger' : ''}`}
                    style={{
                      textDecoration: item.completed ? 'line-through' : 'none',
                      borderLeft: isOverdue ? '4px solid #dc3545' : 'none'
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <Form.Check
                        type="checkbox"
                        checked={item.completed}
                        onChange={() => toggleComplete(item.id)}
                        className="me-3"
                      />
                      <div>
                        <div className="fw-bold">{item.value}</div>
                        <div className="d-flex gap-2 mt-1">
                          <Badge bg={getCategoryColor(item.category)}>
                            {item.category}
                          </Badge>
                          <Badge bg={getPriorityColor(item.priority)}>
                            {item.priority} priority
                          </Badge>
                          {item.dueDate && (
                            <Badge bg={isOverdue ? "danger" : "info"}>
                              📅 {new Date(item.dueDate).toLocaleDateString()}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={() => editItem(item)}
                        className="me-2"
                      >
                        ✏️ Edit
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => deleteItem(item.id)}
                      >
                        🗑️ Delete
                      </Button>
                    </div>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          )}
        </Col>
      </Row>

      {/* Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            placeholder="Edit your task..."
            autoFocus
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={saveEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default App;
