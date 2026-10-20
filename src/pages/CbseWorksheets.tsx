import { useEffect, useRef } from 'react';
import worksheetContent from '../data/cbse-worksheets.html?raw';
import { mountWorksheetSelector } from '../worksheets/selector.js';
import '../../public/worksheet-assets/practice.css';
import '../worksheets/worksheets.css';

export default function CbseWorksheets() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (root.current) return mountWorksheetSelector(root.current);
  }, []);

  return <main ref={root} className="practice-main gmc-worksheets" dangerouslySetInnerHTML={{ __html: worksheetContent }} />;
}
