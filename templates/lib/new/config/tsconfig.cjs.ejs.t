---
to: <%- name %>/config/tsconfig.es.json
---
{
  "compilerOptions": {
    "target": "ES5",
    "module": "ES2015",
    "composite": true,
    "lib": ["ESNext", "dom"],
    "moduleResolution": "Node",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "declaration": true,
    "skipLibCheck": true,
    "types": []
  }
}
