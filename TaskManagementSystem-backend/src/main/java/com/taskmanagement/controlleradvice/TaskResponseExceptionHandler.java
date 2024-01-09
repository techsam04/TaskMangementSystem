package com.taskmanagement.controlleradvice;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import com.taskmanagement.exceptions.ErrorDetails;
import com.taskmanagement.exceptions.TaskNotFoundException;

@ControllerAdvice
public class TaskResponseExceptionHandler extends ResponseEntityExceptionHandler{
	
	@ExceptionHandler(TaskNotFoundException.class)
	public final ResponseEntity<ErrorDetails> handleTaskNotFoundException(Exception ex, WebRequest request) throws Exception {
		ErrorDetails errors = new ErrorDetails(LocalDateTime.now(), ex.getMessage(), request.getDescription(false));
		return new ResponseEntity<ErrorDetails>(errors, HttpStatus.NOT_FOUND);
	}
	
	
	@ExceptionHandler(Exception.class)
	public final ResponseEntity<ErrorDetails> handleAllException(Exception ex, WebRequest request) throws Exception {
		ErrorDetails errors = new ErrorDetails(LocalDateTime.now(), ex.getMessage(), request.getDescription(false));
		return new ResponseEntity<ErrorDetails>(errors, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	

}
