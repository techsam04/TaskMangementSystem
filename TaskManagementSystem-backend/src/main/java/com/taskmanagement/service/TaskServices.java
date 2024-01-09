package com.taskmanagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.taskmanagement.dao.TaskRepo;
import com.taskmanagement.entity.Task;
import com.taskmanagement.exceptions.TaskNotFoundException;

@Service
public class TaskServices {

	@Autowired
	private TaskRepo taskRepo;
	
	public Task addTask(Task task) {
		return taskRepo.save(task);
	}
	
	public boolean deleteTask(long taskId) {
		Optional<Task> task = taskRepo.findById(taskId);
		if(task.isPresent()) {
			taskRepo.deleteById(taskId);
			return true;
		}else
			return false;
		
	}
	
	public List<Task> getAllTasks() {
		return taskRepo.findAll();
	}
	
	public Task updateTask(Task task,long taskId) {
		Optional<Task> existedTask = taskRepo.findById(taskId);
		if(existedTask.isPresent()) {
			Task updatedTask = existedTask.get();
			updatedTask.setDescription(task.getDescription());
			updatedTask.setTaskName(task.getTaskName());
			return taskRepo.save(updatedTask);
		}else
			return null;
	}
	
	public Optional<Task> getTaskById(long taskId) {
		Optional<Task> task = taskRepo.findById(taskId);
		return task;
	}
}
