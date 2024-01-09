package com.taskmanagement.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.taskmanagement.entity.Task;
import com.taskmanagement.exceptions.TaskNotFoundException;
import com.taskmanagement.service.TaskServices;

@CrossOrigin("http://localhost:3000")
@Controller
public class TaskController {
	
	@Autowired
	TaskServices taskServices;
	
	@PostMapping("/tasks/add")
	public ResponseEntity<Task> addTask(@RequestBody Task task) {
		return new ResponseEntity<Task>(taskServices.addTask(task), HttpStatus.CREATED);
		
	}
	
	@GetMapping("/tasks/getall")
	public ResponseEntity<List<Task>> showAllTasks() {
		return new ResponseEntity<List<Task>>(taskServices.getAllTasks(), HttpStatus.OK);
	}
	
	@PutMapping("/tasks/update/{taskid}")
	public ResponseEntity<Task> update(@RequestBody Task task,@PathVariable("taskid") long taskId) {
		Task updatedTask = taskServices.updateTask(task, taskId);
		if(taskServices.getTaskById(taskId).isEmpty())
			
			throw new TaskNotFoundException("Task with given ID not found");
		else {
			return new ResponseEntity<Task>(updatedTask,HttpStatus.OK);
		}
		
	}
	
	@DeleteMapping("/tasks/delete/{taskid}")
	public ResponseEntity<String> deleteTask(@PathVariable("taskid") long taskId) {
		if(taskServices.deleteTask(taskId)) {
			String successMessage = "Task with ID " + taskId + " deleted successfully.";
	        return ResponseEntity.ok(successMessage);

		}
		else
			throw new TaskNotFoundException("Task with given Id not found!");
		
	}
	
}
