cd templates
mustache index.mustache > ../index.html
mustache pet-insurance-101.mustache > ../pet-insurance-101.html
echo "Build completed at $(date)"
