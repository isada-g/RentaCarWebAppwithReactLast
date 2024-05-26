import React from 'react';

function UpdateComment({ inputData, handleChange }) {
    return (
        <div className='w-50 border bg-light p-5'>
            <h3>Comment</h3>
            <div className="mb-3">
                <label htmlFor="content" className="form-label">Content</label>
                <textarea
                    name='content'
                    className='form-control'
                    value={inputData.content}
                    onChange={(e) => handleChange(e, 'comment')}
                />
            </div>
        </div>
    );
}

export default UpdateComment;
