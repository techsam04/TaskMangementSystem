package com.taskmanagement.config;
//
//import java.util.ArrayList;
//import java.util.List;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.provisioning.UserDetailsManager;
//import org.springframework.stereotype.Service;
//
//import com.taskmanagement.dao.UserRepo;
//import com.taskmanagement.entity.*;
//
//
//public class TaskDetailsService implements UserDetailsService{
//	
//	@Autowired
//	UserRepo userRepo;
//
//	@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		String userName,password;
////		List<GrantedAuthority> authorities = null;
//		List<com.taskmanagement.entity.User> users = userRepo.findByuserName(username);
//		if(users.size() == 0) {
//			throw new UsernameNotFoundException("User Details not found: "+username);
//		}else {
//			userName = users.get(0).getUserName();
//			password = users.get(0).getPassword();
////			authorities = new ArrayList<>();
////			authorities.add(new SimpleGrantedAuthority(userName));
//		}
//		return new User(userName, password, null);
//	}
//
//	
//
//}
