import React from 'react';
import { DocumentRenderer, type DocumentRendererProps } from '@keystatic/core/renderer';

interface DocumentProps {
  document: DocumentRendererProps['document'];
}

export default function Document({ document }: DocumentProps) {
  if (!document) return null;

  return (
    <div className="prose-dark">
      <DocumentRenderer document={document} />
    </div>
  );
}
