package com.taskmanagement.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.taskmanagement.entity.Task;

@Repository
public interface TaskRepo extends JpaRepository<Task,Long>{

}
