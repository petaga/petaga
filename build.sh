cd templates
mustache index.mustache > ../index.html
mustache pet-insurance-101 > ../pet-insurance-101.html
echo "Build completed at $(date)"
