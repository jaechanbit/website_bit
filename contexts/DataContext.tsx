import React, { createContext, useContext, useState, useEffect } from 'react';
import { Course, Notice, Consultation, ConsultationTarget } from '../types';
import { NATIONAL_COURSES, STUDENT_COURSES, MOCK_NOTICES } from '../constants';

interface DataContextType {
  nationalCourses: Course[];
  studentCourses: Course[];
  notices: Notice[];
  consultations: Consultation[];
  updateCourse: (updatedCourse: Course) => void;
  addCourse: (course: Omit<Course, 'id'>) => void;
  deleteCourse: (id: string, target: 'NATIONAL' | 'STUDENT') => void;
  addNotice: (notice: Omit<Notice, 'id' | 'date'>) => void;
  deleteNotice: (id: number) => void;
  addConsultation: (consultation: Omit<Consultation, 'id' | 'date' | 'status'>) => void;
  deleteConsultation: (id: string) => void;
  toggleConsultationStatus: (id: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state from localStorage or constants
  const [nationalCourses, setNationalCourses] = useState<Course[]>(() => {
    const saved = localStorage.getItem('nationalCourses');
    return saved ? JSON.parse(saved) : NATIONAL_COURSES;
  });

  const [studentCourses, setStudentCourses] = useState<Course[]>(() => {
    const saved = localStorage.getItem('studentCourses');
    return saved ? JSON.parse(saved) : STUDENT_COURSES;
  });

  const [notices, setNotices] = useState<Notice[]>(() => {
    const saved = localStorage.getItem('notices');
    return saved ? JSON.parse(saved) : MOCK_NOTICES;
  });

  const [consultations, setConsultations] = useState<Consultation[]>(() => {
    const saved = localStorage.getItem('consultations');
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('nationalCourses', JSON.stringify(nationalCourses));
  }, [nationalCourses]);

  useEffect(() => {
    localStorage.setItem('studentCourses', JSON.stringify(studentCourses));
  }, [studentCourses]);

  useEffect(() => {
    localStorage.setItem('notices', JSON.stringify(notices));
  }, [notices]);

  useEffect(() => {
    localStorage.setItem('consultations', JSON.stringify(consultations));
  }, [consultations]);

  const updateCourse = (updatedCourse: Course) => {
    if (updatedCourse.target === 'NATIONAL') {
      setNationalCourses(prev => prev.map(c => c.id === updatedCourse.id ? updatedCourse : c));
    } else {
      setStudentCourses(prev => prev.map(c => c.id === updatedCourse.id ? updatedCourse : c));
    }
  };

  const addCourse = (courseData: Omit<Course, 'id'>) => {
    const newCourse: Course = {
      id: `new_${Date.now()}`,
      ...courseData
    };
    if (newCourse.target === 'NATIONAL') {
      setNationalCourses(prev => [newCourse, ...prev]);
    } else {
      setStudentCourses(prev => [newCourse, ...prev]);
    }
  };

  const deleteCourse = (id: string, target: 'NATIONAL' | 'STUDENT') => {
    if (target === 'NATIONAL') {
      setNationalCourses(prev => prev.filter(c => c.id !== id));
    } else {
      setStudentCourses(prev => prev.filter(c => c.id !== id));
    }
  };

  const addNotice = (noticeData: Omit<Notice, 'id' | 'date'>) => {
    const newNotice: Notice = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0].replace(/-/g, '.'),
      ...noticeData
    };
    setNotices(prev => [newNotice, ...prev]);
  };

  const deleteNotice = (id: number) => {
    setNotices(prev => prev.filter(n => n.id !== id));
  };

  const addConsultation = (data: Omit<Consultation, 'id' | 'date' | 'status'>) => {
    const newConsultation: Consultation = {
      id: Date.now().toString(),
      date: new Date().toLocaleString(),
      status: 'PENDING',
      ...data
    };
    setConsultations(prev => [newConsultation, ...prev]);
  };

  const deleteConsultation = (id: string) => {
    setConsultations(prev => prev.filter(c => c.id !== id));
  };

  const toggleConsultationStatus = (id: string) => {
    setConsultations(prev => prev.map(c => 
      c.id === id ? { ...c, status: c.status === 'PENDING' ? 'COMPLETED' : 'PENDING' } : c
    ));
  };

  return (
    <DataContext.Provider value={{
      nationalCourses,
      studentCourses,
      notices,
      consultations,
      updateCourse,
      addCourse,
      deleteCourse,
      addNotice,
      deleteNotice,
      addConsultation,
      deleteConsultation,
      toggleConsultationStatus
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};