import React, { useState, ChangeEvent } from 'react';
import { SubjectEntry } from '../../interfaces/subject_input_interface';

interface DynamicInputGeneratorProps {
    onDataFetch: (data: SubjectEntry[]) => void;
}

function DynamicInputGenerator({ onDataFetch }: DynamicInputGeneratorProps) {
  const [inputCount, setInputCount] = useState<number>(1);
  const [subjectData, setSubjectData] = useState<SubjectEntry[]>(
    Array(inputCount).fill({ subjectName: 0, extMarksObtained: 0, intMarksObtained: 0, maximumMarks: 100 })
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newCount = parseInt(e.target.value) || 1;
    setInputCount(newCount);
  };

  const handleInputValueChange = (pairIndex: number, field: string, value: string) => {
    const updatedData = [...subjectData];
    updatedData[pairIndex] = { ...updatedData[pairIndex], [field]: value };
    setSubjectData(updatedData);
    handleGetData(updatedData);
  };

  const renderInputs = () => {
    const inputs = [];
    for (let i = 0; i < inputCount; i++) {
        inputs.push(
            <div className="form-row" key= {i}>
                <div className="col" key={i + 'subjectDiv'}>
                <input type="text" className="form-control" placeholder="Subject Name" key={i + 'subjectName'}
                onChange={(e) => handleInputValueChange(i, 'subjectName', e.target.value)}></input>
                </div>
                <div className="col" key={i + 'intMarksDiv'}>
                <input type="number" className="form-control" placeholder="Internal Marks" key={i + 'internalMarks'}
                onChange={(e) => handleInputValueChange(i, 'intMarksObtained', e.target.value)}></input>
                </div>
                <div className="col" key={i + 'extMarksDiv'}>
                <input type="number" className="form-control" placeholder="External Marks" key={i + 'externalMarks'}
                onChange={(e) => handleInputValueChange(i, 'extMarksObtained', e.target.value)}></input>
                </div>
                <div className="col" key={i + 'maxMarksDiv'}>
                <input type="number" className="form-control" placeholder="Maximum Marks" key={i + 'maxMarks'}
                onChange={(e) => handleInputValueChange(i, 'maximumMarks', e.target.value)}></input>
                </div>
            </div>
        );
    }
    
    return inputs;
  };

  const handleGetData = (data: SubjectEntry[]) => {
    onDataFetch(data);
  };

  return (
    <div>
      <label>Enter the number of subjects:</label>
      <input
        type="number"
        value={inputCount}
        onChange={handleInputChange}
      />

      <div>
        {renderInputs()}
      </div>
    </div>
  );
}

export default DynamicInputGenerator;
