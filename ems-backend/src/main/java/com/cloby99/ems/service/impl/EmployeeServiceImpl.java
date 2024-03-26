package com.cloby99.ems.service.impl;

import com.cloby99.ems.dto.EmployeeDto;
import com.cloby99.ems.entity.Employee;
import com.cloby99.ems.mapper.EmployeeMapper;
import com.cloby99.ems.repository.EmployeeRepository;
import com.cloby99.ems.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService  {

    private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }
}
