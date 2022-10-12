import { useEffect, useState } from 'react';
import { Teacher } from '../../@types/teacher';
import { ApiService } from '../../services/ApiService';

export function useIndex() {
    const [listTeachers, setListTeachers] = useState<Teacher[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        ApiService.get('/teachers').then((answer) => {
            setListTeachers(answer.data)
        })
    }, []);

    useEffect(() => {
        clearForm();
    }, [selectedTeacher])

    function scheduleClass() {
        if (selectedTeacher !== null) {
            if(validateClassData()) {
                ApiService.post('/teachers/' + selectedTeacher.id + '/classrooms', {
                    name,
                    email
                }).then(() => {
                    setSelectedTeacher(null);
                    setMessage('Cadastrado com sucesso!');
                }).catch((error) => {
                    setMessage(error.response?.data.message);
                });
            } else {
                setMessage('Preencha os dados corretamente');
            }
        }
    }

    function validateClassData() {
        return name.length > 0 && email.length > 0;
    }

    function clearForm() {
        setName('');
        setEmail('');
    }

    return {
        listTeachers,
        name,
        setName,
        email,
        setEmail,
        selectedTeacher,
        setSelectedTeacher,
        scheduleClass,
        message, 
        setMessage
    }
    }