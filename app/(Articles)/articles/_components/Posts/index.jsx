'use client';
import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import './index.styles.scss';
import ArrowYellow from '@/assets/Icons/ArrowYellow'; // تأكد من صحة المسار
import Link from 'next/link'; // استيراد المكون Link

const Posts = ({ data }) => {
    const itemsPerPage = 6  // تعيين قيمة ثابتة لعدد العناصر في كل صفحة
    const [currentPage, setCurrentPage] = useState(1);
    const count = Math.ceil(data.length / itemsPerPage);  // حساب عدد الصفحات بناءً على العدد الثابت للعناصر لكل صفحة

    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    const currentData = () => {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin, end);
    };
    return (
        <div className="posts-wrapper">
            <div className='posts-container'>
                {currentData().map((item, index) => (
                    <Link key={index} href={`/articles/${item.id}`} passHref>
                        <div className='post-link'>
                            <Image className='image-article' src={`/${item.image}`} width={377} height={502} alt={item.title} />
                            <div className='title-article'>
                                <h2>{item.title}</h2>
                                <ArrowYellow />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <Stack className='posts-pagination'  spacing={2}>
                <Pagination variant="outlined" count={count} page={currentPage} onChange={handleChange} showFirstButton showLastButton />
            </Stack>
        </div>
    );
};

export default Posts;
